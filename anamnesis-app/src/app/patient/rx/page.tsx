"use client";

import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function PatientRxPage() {
  var router = useRouter();

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <button
          className="text-tx2 text-[20px] p-1 bg-transparent border-none cursor-pointer"
          onClick={function () { router.push("/patient/history"); }}
        >
          {"←"}
        </button>
        <h2 className="text-[20px] font-extrabold text-tx">Reteta Digitala</h2>
      </div>
      <p className="text-[13px] text-tx3 mb-4">NFT verificabil - Utilizare unica la farmacie</p>

      <div className="bg-bg-card border border-brd rounded-r overflow-hidden">
        <div className="p-4 border-b border-brd flex items-center gap-3">
          <span className="text-[22px]">{"📋"}</span>
          <div className="flex-1">
            <div className="text-[16px] font-extrabold text-tx">Reteta #R-2026-0501</div>
            <div className="text-[12px] text-tx2">Emisa: 15 Mar 2026</div>
          </div>
          <Badge variant="ok">Activa</Badge>
        </div>

        <div className="p-4">
          <div className="text-[12px] text-tx3 mb-2">MEDIC PRESCRIPTOR</div>
          <div className="text-[15px] font-bold text-tx">Dr. Elena Popescu</div>
          <div className="text-[13px] text-tx2">Cardiologie - Spitalul Universitar Bucuresti</div>
          <div className="text-[12px] text-tx3 mt-1 mb-3.5">
            Cod parafa: <span className="text-gold font-bold">C-28451</span>
          </div>

          <div className="h-px bg-brd mb-3.5" />

          <div className="text-[12px] text-tx3 mb-2.5">MEDICAMENTE PRESCRISE</div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--blue)" }} />
            <div className="text-[14px] font-semibold text-tx flex-1">Ramipril 5mg</div>
            <div className="text-[12px] text-tx2">1x/zi - 30 zile</div>
          </div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--ok)" }} />
            <div className="text-[14px] font-semibold text-tx flex-1">Aspirina cardio 75mg</div>
            <div className="text-[12px] text-tx2">1x/zi - 30 zile</div>
          </div>

          <div className="h-px bg-brd my-3.5" />

          <div className="text-[12px] text-tx3 mb-1">DIAGNOSTIC</div>
          <div className="text-[14px] font-semibold text-tx mb-2.5">
            I10 — Hipertensiune esentiala
          </div>

          <div className="text-[12px] text-tx3">SEMNATURA</div>
          <div className="flex items-center gap-2 mt-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="text-[13px] text-ok font-semibold">
              Semnat biometric - Dr. Elena Popescu
            </span>
          </div>
          <div className="text-[11px] text-tx3 mt-1">
            Hash: 0x8f4a...c7e2 - Bloc: #4,892,107
          </div>
        </div>

        <div className="p-4 border-t border-brd text-center">
          <div className="text-[12px] text-tx3 font-bold tracking-widest uppercase mb-2.5">
            Arata la farmacie
          </div>

          <div className="w-36 h-36 mx-auto bg-bg-surf rounded-lg border border-brd relative flex items-center justify-center mb-3">
            <div className="grid grid-cols-11 gap-px w-28 h-28">
              {[1,1,1,0,1,0,1,1,1,0,1,
                1,0,1,1,0,1,0,1,0,1,1,
                1,1,1,0,1,1,1,0,1,1,0,
                0,0,0,1,0,1,0,1,0,0,1,
                1,0,1,0,1,0,1,0,1,0,1,
                0,1,0,1,0,1,0,1,1,1,0,
                1,1,1,0,1,0,1,0,1,0,1,
                1,0,1,1,0,1,1,1,0,1,0,
                1,1,1,0,1,0,0,1,1,1,1,
                0,1,0,1,1,0,1,0,1,0,1,
                1,0,1,0,1,1,0,1,0,1,1].map(function (v, i) {
                return (
                  <div
                    key={i}
                    className={"rounded-[1px] " + (v ? "bg-tx" : "bg-transparent")}
                  />
                );
              })}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-7 rounded-md bg-gold flex items-center justify-center text-bg text-[12px] font-black">
                A
              </div>
            </div>
          </div>

          <div className="mb-2">
            <Badge variant="gold" className="text-[12px] px-3.5 py-1.5">
              NFT - Utilizare unica
            </Badge>
          </div>
          <p className="text-[12px] text-tx3 leading-relaxed">
            Farmacistul scaneaza, validare blockchain, marcat utilizat definitiv
          </p>
        </div>
      </div>

      <Button variant="outline" fullWidth className="mt-2">
        Adauga in Wallet
      </Button>
    </div>
  );
}
