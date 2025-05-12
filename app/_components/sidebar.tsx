import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";
import Image from "next/image";
import logo from "./image/logo.png"; // Caminho relativo ao 'sidebar.tsx'

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* IMAGEM */}
      <div className="px-8 py-6">
        <Image
          src={logo}
          alt="Logo Mania Foods"
          width={120} // Ajuste o tamanho desejado
          height={48} // Ditado por proporções (LxA)
          className="object-contain"
        />
      </div>
      {/* BOTÕES */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
