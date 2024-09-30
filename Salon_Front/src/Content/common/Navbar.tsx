import '../../Utils/NavUtil'
import { useState } from 'react';


export const NavbarAdmin = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState({
    agenda: false,
    contabilidad: false,
    documentacion: false,
  });
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleSubMenu = (menu: keyof typeof openMenu) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="bg-gray-100">

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">App Salon</h1>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/nosotros" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="/api/servicios" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Servicios</a>
              </li>
              <li>
                <a href="/contacto" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
          <ul className="space-y-2">

            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => toggleSubMenu('agenda')}
              >
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Agenda</span>
                </div>
                <i className={`fas fa-chevron-${openMenu.agenda ? 'up' : 'down'} text-xs`}></i>
              </div>
              {openMenu.agenda && (
                <ul className="desplegable ml-4">
                  <li>
                    <a href="api/admin/citas" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Gestión de citas Mensuales
                    </a>
                  </li>
                  <li>
                    <a href="api/admin/citasGen" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Gestión de citas General
                    </a>
                  </li>
                </ul>
              )}
            </li>


            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => toggleSubMenu('contabilidad')}
              >
                <div className="flex items-center">
                  <i className="fas fa-money-bill-wave mr-2"></i>
                  <span>Contabilidad</span>
                </div>
                <i className={`fas fa-chevron-${openMenu.contabilidad ? 'up' : 'down'} text-xs`}></i>
              </div>
              {openMenu.contabilidad && (
                <ul className="desplegable ml-4">
                  <li>
                    <a href="/api/admin/informe" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Informe
                    </a>
                  </li>
                  <li>
                    <a href="/api/admin/gastos" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Gastos
                    </a>
                  </li>
                  <li>
                    <a href="/api/admin/ganancias" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Ganancias
                    </a>
                  </li>
                </ul>
              )}
            </li>


            <li className="opcion-con-desplegable">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => toggleSubMenu('documentacion')}
              >
                <div className="flex items-center">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span>Documentación</span>
                </div>
                <i className={`fas fa-chevron-${openMenu.documentacion ? 'up' : 'down'} text-xs`}></i>
              </div>
              {openMenu.documentacion && (
                <ul className="desplegable ml-4">
                  <li>
                    <a href="/api/admin/" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Tener en Cuenta
                    </a>
                  </li>
                  <li>
                    <a href="/api/admin/helps" className="block p-2 hover:bg-gray-700 flex items-center">
                      <i className="fas fa-chevron-right mr-2 text-xs"></i>
                      Peticiones
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};