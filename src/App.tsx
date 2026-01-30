import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import DashboardOrders from "./pages/DashboardOrders";
import DashboardProducts from "./pages/DashboardProducts";
import DashboardCustomers from "./pages/DashboardCustomers";
import DashboardFinancial from "./pages/DashboardFinancial";
import DashboardSettings from "./pages/DashboardSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/relogios" element={<Products />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/minha-conta" element={<Account />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/pedidos" element={<DashboardOrders />} />
              <Route path="/dashboard/produtos" element={<DashboardProducts />} />
              <Route path="/dashboard/clientes" element={<DashboardCustomers />} />
              <Route path="/dashboard/financeiro" element={<DashboardFinancial />} />
              <Route path="/dashboard/configuracoes" element={<DashboardSettings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
