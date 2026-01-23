{/* SECCIÓN MAPA GLOBAL - VERSIÓN CLARA */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            {/* Título en color oscuro para que se lea bien */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Nuestro equipo de trabajo se encuentra en las siguientes ubicaciones
            </h2>
            <div className="w-20 h-1 bg-[#135bec] rounded-full"></div>
          </div>

          {/* Contenedor del mapa con fondo gris muy suave */}
          <div className="bg-slate-50 border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              <div className="flex-[2.5] relative p-8 min-h-[500px]">
                <WorldMap 
                  onSelectOffice={setSelectedOffice} 
                  selectedOfficeId={selectedOffice.id} 
                />
              </div>

              {/* Panel lateral de detalles */}
              <div className="flex-1 bg-white border-l border-slate-200 p-10 flex flex-col justify-between">
                {/* Asegúrate que OfficeDetails no tenga textos blancos internos */}
                <OfficeDetails office={selectedOffice} />

                <div className="mt-12">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Navegar Ubicaciones</p>
                  <div className="grid grid-cols-2 gap-2">
                    {OFFICE_LOCATIONS.map(office => (
                      <button
                        key={office.id}
                        onClick={() => setSelectedOffice(office)}
                        className={`px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                          selectedOffice.id === office.id
                          ? 'bg-[#135bec] text-white shadow-lg shadow-[#135bec]/20'
                          : 'bg-slate-100 text-slate-600 hover:text-[#135bec] hover:bg-slate-200'
                        }`}
                      >
                        {office.city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;
