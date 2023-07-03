import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <header className='md:w-1/4 bg-blue-900 px-10 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - VILGWeb</h2>

        <nav className='mt-10'>
          <NavLink 
            to="/" end
            className={ ({ isActive }) => isActive ? "text-blue-300 text-xl block mt-2 hover:text-blue-300 transition-colors " : "text-white text-xl block mt-2 hover:text-blue-300 transition-colors" }
          >
            Clientes
          </NavLink>

          <NavLink 
            to="/cliente/nuevo"
            className={ ({ isActive }) => isActive ? "text-blue-300 text-xl block mt-2 hover:text-blue-300 transition-colors " : "text-white text-xl block mt-2 hover:text-blue-300 transition-colors" }
          >
            Nuevo Cliente
          </NavLink>
        </nav>
      </header>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;