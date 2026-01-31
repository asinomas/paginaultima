import { ROUTES } from './routes';
import type { NavPage } from './types';

export function navigateInternal(
  page: NavPage,
  options?: { scroll?: boolean }
) {
  // HOY: navegación por estado + scroll
  // MAÑANA: aquí va el router

  if (options?.scroll !== false) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
