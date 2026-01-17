'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useClerk, useUser } from '@clerk/nextjs';
import { usePageTransition } from '@/components/PageTransition';
import {
    Home,
    Box,
    Trophy,
    Activity,
    LayoutDashboard,
    Moon,
    Sun,
    LogIn,
    LogOut,
    User
} from 'lucide-react';
import Dock from '@/components/ui/dock';

export default function DockNavigation() {
    const { navigateWithTransition } = usePageTransition();
    const { theme, setTheme } = useTheme();
    const { isSignedIn } = useUser();
    const { signOut } = useClerk();

    const items = [
        {
            icon: <Home size={18} className="text-foreground" />,
            label: 'Home',
            onClick: () => navigateWithTransition('/'),
        },
        {
            icon: <Box size={18} className="text-foreground" />,
            label: 'Models',
            onClick: () => navigateWithTransition('/models'),
        },
        {
            icon: <Trophy size={18} className="text-foreground" />,
            label: 'Rankings',
            onClick: () => navigateWithTransition('/rankings'),
        },
        {
            icon: <Activity size={18} className="text-foreground" />,
            label: 'Status',
            onClick: () => navigateWithTransition('/status'),
        },
        {
            icon: theme === 'dark' ? <Moon size={18} className="text-foreground" /> : <Sun size={18} className="text-foreground" />,
            label: 'Theme',
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
        },
    ];

    if (isSignedIn) {
        items.push({
            icon: <LayoutDashboard size={18} className="text-foreground" />,
            label: 'Dashboard',
            onClick: () => navigateWithTransition('/dashboard'),
        });
        items.push({
            icon: <LogOut size={18} className="text-foreground" />,
            label: 'Logout',
            onClick: () => signOut({ redirectUrl: '/' }),
        });
    } else {
        items.push({
            icon: <LogIn size={18} className="text-foreground" />,
            label: 'Sign In',
            onClick: () => navigateWithTransition('/sign-in'),
        });
    }

    return (
        <Dock items={items} />
    );
}
