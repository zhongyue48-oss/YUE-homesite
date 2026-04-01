/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Philosophy } from "./pages/Philosophy";
import { Project } from "./pages/Project";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Gallery } from "./pages/Gallery";
import { GalleryDetail } from "./pages/GalleryDetail";
import { About } from "./pages/About";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/philosophy" replace />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:id" element={<GalleryDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

