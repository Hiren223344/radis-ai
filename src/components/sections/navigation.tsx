'use client';

import React from 'react';
import { Search, Menu, Key, CreditCard, LayoutDashboard, LogOut, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import TransitionLink from '@/components/TransitionLink';
import { SignedIn, SignedOut, useUser, useClerk } from '@clerk/nextjs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  search?: string;
  setSearch?: (value: string) => void;
  onRedirect?: (path: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ search, setSearch }) => {
    const { user } = useUser();
    const { signOut } = useClerk();
    const { theme, setTheme } = useTheme();

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <nav 
      id="main-nav"
      className="fixed top-0 z-[100] w-full liquid-glass border-b border-white/80 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]"
      style={{ visibility: 'visible', display: 'flex' }}
    >
      <div className="container mx-auto py-3">
        <div className="flex flex-row justify-between items-center text-sm md:text-base">
          <div className="flex items-center gap-8">
            <TransitionLink 
              href="/"
              className="border-none bg-transparent p-0 cursor-pointer"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center" 
              >
                <div 
                  onMouseMove={handleMouseMove}
                  className="flex items-center gap-3 liquid-glass-button py-2 px-4 rounded-2xl border border-white/60 shadow-sm"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 512 512" 
                    className="size-6 fill-primary" 
                    aria-label="Logo"
                  >
                    <path d="M256 0L0 256l256 256 256-256L256 0zm0 100.3L411.7 256 256 411.7 100.3 256 256 100.3z" />
                    <path d="M256 170.7L170.7 256 256 341.3 341.3 256 256 170.7z" />
                    <title>Radison</title>
                  </svg>
                  <span className="text-primary font-bold tracking-tight text-lg">Radison</span>
                </div>
              </motion.div>
            </TransitionLink>

            {setSearch && (
              <div className="hidden md:block relative group">
                <div 
                  onMouseMove={handleMouseMove}
                  className="flex items-center gap-2 rounded-2xl h-11 w-80 transition-all liquid-glass-button px-4 border border-white/40 focus-within:ring-2 focus-within:ring-primary/10 focus-within:border-primary/20"
                >
                  <Search className="h-4 w-4 opacity-50" />
                  <input 
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground font-medium" 
                    placeholder="Search anything..."
                    type="text"
                    value={search || ""}
                    onChange={(e) => setSearch?.(e.target.value)}
                  />
                  <kbd className="flex items-center justify-center h-5 px-1.5 rounded border bg-white/50 border-white/30 text-[10px] font-bold text-muted-foreground">
                    ⌘K
                  </kbd>
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
<div className="flex items-center gap-1 bg-white/30 dark:bg-white/10 p-1.5 rounded-2xl border border-white/60 dark:border-white/20 backdrop-blur-sm">
                <TransitionLink href="/models">
                  <Button variant="ghost" className="h-9 px-5 rounded-xl text-sm font-semibold hover:bg-white/50 dark:hover:bg-white/10 hover:shadow-sm transition-all">
                    Models
                  </Button>
                </TransitionLink>
                <TransitionLink href="/rankings">
                  <Button variant="ghost" className="h-9 px-5 rounded-xl text-sm font-semibold hover:bg-white/50 dark:hover:bg-white/10 hover:shadow-sm transition-all">
                    Rankings
                  </Button>
                </TransitionLink>
              <TransitionLink href="/status">
                    <Button variant="ghost" className="h-9 px-5 rounded-xl text-sm font-semibold hover:bg-white/50 dark:hover:bg-white/10 hover:shadow-sm transition-all">
                      Status
                    </Button>
                  </TransitionLink>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="rounded-xl hover:bg-white/50 dark:hover:bg-white/10"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>

              <SignedOut>
                <div className="flex items-center gap-2">
                  <TransitionLink href="/sign-in">
                    <Button 
                      variant="ghost"
                      className="rounded-2xl font-semibold px-6 hover:bg-white/50"
                    >
                      Sign In
                    </Button>
                  </TransitionLink>
                  <TransitionLink href="/sign-up">
                    <Button 
                      size="lg" 
                      className="rounded-2xl font-bold px-8 shadow-xl liquid-glass-button border-white/60 hover:scale-105 transition-transform"
                    >
                      Get Started
                    </Button>
                  </TransitionLink>
                </div>
              </SignedOut>

              <SignedIn>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'User'} />
                          <AvatarFallback>
                            {user?.firstName?.[0] || user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() || 'U'}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{user?.fullName || 'User'}</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user?.primaryEmailAddress?.emailAddress}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <TransitionLink href="/dashboard">
                        <DropdownMenuItem className="cursor-pointer">
                          <LayoutDashboard className="mr-2 h-4 w-4" />
                          Dashboard
                        </DropdownMenuItem>
                      </TransitionLink>
                      <TransitionLink href="/dashboard/api-keys">
                        <DropdownMenuItem className="cursor-pointer">
                          <Key className="mr-2 h-4 w-4" />
                          API Keys
                        </DropdownMenuItem>
                      </TransitionLink>
                      <TransitionLink href="/dashboard/billing">
                        <DropdownMenuItem className="cursor-pointer">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Billing
                        </DropdownMenuItem>
                      </TransitionLink>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="cursor-pointer text-destructive focus:text-destructive"
                        onClick={() => signOut({ redirectUrl: '/' })}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SignedIn>
            </div>

          <div className="lg:hidden">
            <Button variant="outline" size="icon" className="rounded-2xl border-white/60 liquid-glass-button">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
