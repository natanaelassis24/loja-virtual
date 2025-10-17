"use client";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../../components/Map"), { ssr: false });

export default function ContatosPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contato & Localização</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Sobre a Loja</h2>
        <p>
          Bem-vindo à nossa loja virtual! Aqui você encontra os melhores produtos, com qualidade e atendimento de primeira.
          Estamos localizados no coração da cidade, prontos para atender você.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Nossa Localização</h2>
        <MapWithNoSSR />
      </section>
    </div>
  );
}
