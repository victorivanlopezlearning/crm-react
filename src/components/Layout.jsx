import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <header className='bg-blue-900 px-8 py-10'>
        <h2 className='text-4xl font-black text-center text-white uppercase'>CRM - VILGWeb</h2>

        <nav className='mt-10'>
          <NavLink 
            to="/" end
            className={ ({ isActive }) => isActive ? "text-blue-200 bg-blue-950 text-xl block mt-2 hover:text-blue-200 transition-colors p-2" : "text-white text-xl block mt-2 hover:text-blue-200 transition-colors p-2" }
          >
            Clientes
          </NavLink>

          <NavLink 
            to="/clients/new"
            className={ ({ isActive }) => isActive ? "text-blue-200 bg-blue-950 text-xl block mt-2 hover:text-blue-200 transition-colors p-2" : "text-white text-xl block mt-2 hover:text-blue-200 transition-colors p-2" }
          >
            Nuevo Cliente
          </NavLink>
        </nav>
      </header>

      <main className='md:grow p-5 md:p-10 md:h-screen overflow-y-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;