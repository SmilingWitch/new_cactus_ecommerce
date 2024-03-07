import React from 'react';

interface AuthContextValue {
    user: string | null;
    signIn: (formValue: any) => Promise<void>;
    signOut: () => Promise<void>;
    credential: any; // Considera especificar un tipo más concreto para 'credential'
    updateCredential: (newCredential: any) => void; // Considera especificar un tipo más concreto para 'newCredential'
   }

   export const AuthContext = React.createContext<AuthContextValue | null>(null);
