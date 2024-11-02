import React, { useState, useEffect, useCallback } from 'react';
import { X, AlertCircle, Power } from 'lucide-react';

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeItem, setActiveItem] = useState(null);
  const [showRipple, setShowRipple] = useState(false);
  
  const menuItems = [
    { label: 'HACK', icon: '⚡', color: 'from-cyan-400 to-blue-500', description: 'Initiate system breach', shortcut: 'Alt+H' },
    { label: 'SCAN', icon: '📡', color: 'from-fuchsia-400 to-purple-500', description: 'Analyze network', shortcut: 'Alt+S' },
    { label: 'SYNC', icon: '🔄', color: 'from-blue-400 to-indigo-500', description: 'Synchronize data', shortcut: 'Alt+Y' },
    { label: 'LOAD', icon: '💾', color: 'from-violet-400 to-purple-500', description: 'Load resources', shortcut: 'Alt+L' },
    { label: 'KILL', icon: '⚔️', color: 'from-red-400 to-pink-500', description: 'Terminate process', shortcut: 'Alt+K' }
  ];

  const handleKeyboardShortcuts = useCallback((e) => {
    if (e.altKey) {
      const item = menuItems.find(item => 
        item.shortcut.toLowerCase().endsWith(e.key.toLowerCase())
      );
      if (item) {
        e.preventDefault();
        handleItemClick(item);
      }
    }
    // Press Escape to close menu
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboardShortcuts);
    return () => document.removeEventListener('keydown', handleKeyboardShortcuts);
  }, [handleKeyboardShortcuts]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.radial-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleClick = (e) => {
    const x = Math.min(Math.max(e.clientX, 120), window.innerWidth - 120);
    const y = Math.min(Math.max(e.clientY, 120), window.innerHeight - 120);
    setPosition({ x, y });
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 1000);
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item.label);
    
    // Simulate action with loading state
    setTimeout(() => {
      setActiveItem(null);
      setIsOpen(false);
    }, 1000);
  };

  const playHoverSound = () => {
    try {
      const audio = new Audio();
      audio.volume = 0.1;
      audio.src = 'data:audio/wav;base64,UklGRoABAABXQVZFZmt0ICAAAAABAAEARKwAAIhYAQBkYXRhYgEAAL///////////////////////////////////////////////////////////////////38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wB/';
      audio.play().catch(() => {});
    } catch (error) {
      // Silently fail if audio playback fails
    }
  };

  return (
    <div 
      className="w-full h-screen bg-gray-900 relative cursor-crosshair select-none"
      onClick={handleClick}
      role="application"
      aria-label="Radial Menu Interface"
    >
      {showRipple && (
        <div 
          className="absolute w-16 h-16 border-2 border-cyan-500/50 rounded-full 
            animate-ping pointer-events-none"
          style={{ 
            left: position.x - 32,
            top: position.y - 32
          }}
        />
      )}
      
      {isOpen && (
        <div 
          className="fixed radial-menu"
          style={{ left: position.x, top: position.y }}
          role="menu"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute w-12 h-12 bg-gray-800 rounded-full -translate-x-6 -translate-y-6 
              flex items-center justify-center border-2 border-cyan-500/50 hover:border-cyan-500
              transition-all duration-200 group z-50 hover:scale-110"
            aria-label="Close menu"
          >
            <Power 
              className="w-6 h-6 text-cyan-500/70 group-hover:text-cyan-500 
                transition-colors duration-200"
            />
          </button>
          
          {/* Decorative rings */}
          <div className="absolute w-64 h-64 border border-cyan-500/20 rounded-full 
            -translate-x-32 -translate-y-32 animate-ping-slow" />
          <div className="absolute w-48 h-48 border border-cyan-500/10 rounded-full 
            -translate-x-24 -translate-y-24 animate-spin-slow" />
          
          {menuItems.map((item, index) => {
            const totalItems = menuItems.length;
            const angle = (index * (Math.PI * 2)) / totalItems - Math.PI / 2;
            const radius = 120;
            
            return (
              <div
                key={item.label}
                className="absolute transition-all duration-500 ease-out-expo"
                style={{
                  transform: isOpen 
                    ? `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)` 
                    : 'translate(0, 0)',
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div 
                  className="absolute h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent origin-left"
                  style={{
                    width: `${radius}px`,
                    transform: `rotate(${angle * (180/Math.PI)}deg)`,
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.5s ease-out',
                    transitionDelay: `${index * 50}ms`,
                  }}
                />
                
                <button
                  className={`bg-gradient-to-r ${item.color} 
                    -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-xl
                    shadow-lg hover:scale-110 transition-all duration-200
                    border-2 border-white/20 hover:border-white/40
                    flex items-center gap-3 group relative
                    ${activeItem === item.label ? 'animate-pulse' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleItemClick(item);
                  }}
                  onMouseEnter={playHoverSound}
                  role="menuitem"
                  aria-label={`${item.label}: ${item.description}`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-white font-mono tracking-wider text-sm">
                    {item.label}
                  </span>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 
                    transition-opacity rounded-xl" />
                  
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    bg-gray-900/90 text-white rounded opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 whitespace-nowrap pointer-events-none
                    flex flex-col items-center gap-1 p-2">
                    <div className="text-xs">{item.description}</div>
                    <div className="text-xs text-cyan-400">{item.shortcut}</div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      )}
      
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2">
        <AlertCircle className="w-5 h-5 text-cyan-500/70" />
        <div className="text-center text-cyan-500/70 font-mono tracking-widest animate-pulse">
          CLICK ANYWHERE TO ACCESS SYSTEM
        </div>
      </div>
    </div>
  );
};

export default RadialMenu;