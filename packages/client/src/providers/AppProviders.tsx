import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <Router>{children}</Router>
);
