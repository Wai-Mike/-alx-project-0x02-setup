import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Website:</span> {website}
      </p>
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Address:</span> {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;

