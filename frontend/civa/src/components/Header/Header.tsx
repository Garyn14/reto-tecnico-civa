import React from "react";

interface UserInfo {
  name: string;
  role: string;
}

interface HeaderProps {
  title: string;
  userInfo: UserInfo;
}

const Header: React.FC<HeaderProps> = ({ title, userInfo }) => {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
        {/* Título */}
        <h1 className="text-xl font-bold">{title}</h1>

        {/* Información del usuario */}
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
            {userInfo.name[0].toUpperCase()}
          </div>
          {/* Nombre y rol */}
          <div>
            <p className="text-sm font-medium">{userInfo.name}</p>
            <p className="text-xs">{userInfo.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
