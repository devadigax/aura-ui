import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';

import HomePage          from './pages/HomePage';
import ButtonsPage       from './pages/ButtonsPage';
import CardsPage         from './pages/CardsPage';
import CarouselPage      from './pages/CarouselPage';
import ModalsPage        from './pages/ModalsPage';
import OffcanvasPage     from './pages/OffcanvasPage';
import AlertsPage        from './pages/AlertsPage';
import BadgesPage        from './pages/BadgesPage';
import FormsPage         from './pages/FormsPage';
import TablesPage        from './pages/TablesPage';
import AccordionPage     from './pages/AccordionPage';
import ProgressPage      from './pages/ProgressPage';
import SpinnersPage      from './pages/SpinnersPage';
import ToastsPage        from './pages/ToastsPage';
import NavsPage          from './pages/NavsPage';
import DropdownPage      from './pages/DropdownPage';
import ListGroupPage     from './pages/ListGroupPage';
import PaginationPage    from './pages/PaginationPage';
import BreadcrumbPage    from './pages/BreadcrumbPage';
import HelpersPage       from './pages/HelpersPage';
import PlaceholdersPage  from './pages/PlaceholdersPage';
import SidebarPage       from './pages/SidebarPage';
import TooltipsPage      from './pages/TooltipsPage';
import PopoverPage       from './pages/PopoverPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/components/buttons"      element={<Layout><ButtonsPage /></Layout>} />
        <Route path="/components/cards"        element={<Layout><CardsPage /></Layout>} />
        <Route path="/components/carousel"     element={<Layout><CarouselPage /></Layout>} />
        <Route path="/components/modals"       element={<Layout><ModalsPage /></Layout>} />
        <Route path="/components/offcanvas"    element={<Layout><OffcanvasPage /></Layout>} />
        <Route path="/components/alerts"       element={<Layout><AlertsPage /></Layout>} />
        <Route path="/components/badges"       element={<Layout><BadgesPage /></Layout>} />
        <Route path="/components/forms"        element={<Layout><FormsPage /></Layout>} />
        <Route path="/components/tables"       element={<Layout><TablesPage /></Layout>} />
        <Route path="/components/accordion"    element={<Layout><AccordionPage /></Layout>} />
        <Route path="/components/progress"     element={<Layout><ProgressPage /></Layout>} />
        <Route path="/components/spinners"     element={<Layout><SpinnersPage /></Layout>} />
        <Route path="/components/toasts"       element={<Layout><ToastsPage /></Layout>} />
        <Route path="/components/navs"         element={<Layout><NavsPage /></Layout>} />
        <Route path="/components/dropdown"     element={<Layout><DropdownPage /></Layout>} />
        <Route path="/components/list-group"   element={<Layout><ListGroupPage /></Layout>} />
        <Route path="/components/pagination"   element={<Layout><PaginationPage /></Layout>} />
        <Route path="/components/breadcrumb"   element={<Layout><BreadcrumbPage /></Layout>} />
        <Route path="/components/helpers"      element={<Layout><HelpersPage /></Layout>} />
        <Route path="/components/placeholders" element={<Layout><PlaceholdersPage /></Layout>} />
        <Route path="/components/sidebar"      element={<Layout><SidebarPage /></Layout>} />
        <Route path="/components/tooltips"     element={<Layout><TooltipsPage /></Layout>} />
        <Route path="/components/popover"      element={<Layout><PopoverPage /></Layout>} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
