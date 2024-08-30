import React, { useEffect, useState } from 'react';
import StatsCard from '../components/StatsCard';
import { useSelector } from 'react-redux';
import { Table, Space, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/userSlice';


const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [count, setCount] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/count`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        console.error('Notları getirme hatası:', response.statusText);
        dispatch(userLogout());
        localStorage.removeItem("user");
        navigate("/login");
      }

      if (response.ok) {
        const json = await response.json();
        setCount(json);
      }
    };

    getInfo();
  }, [user.token, dispatch, navigate]);



  return (
    <div className="flex w-full">
      <div className="container mx-auto">
        <h1 className="text-xl mt-7">
          Hoşgeldin <span className='font-semibold'>{user?.admin?.username}</span>, <span className='text-green-600 font-semibold'>{user?.admin?.role}</span> yetkileriyle panele erişiyorsun.
        </h1>
        <div className="grid grid-cols-4 text-center gap-3 justify-self-center justify-around mt-10">
          <StatsCard
            img="https://cdn-icons-png.flaticon.com/128/8536/8536676.png"
            title={'Referans Sayısı'}
            number={count?.referenceCount}
          />
          <StatsCard
            img="https://cdn-icons-png.flaticon.com/128/869/869432.png"
            title={'Bayilik Sayısı'}
            number={count?.dealerShipCount}
          />
          <StatsCard
            img="https://cdn-icons-png.flaticon.com/128/4257/4257674.png"
            title={'Proje Sayısı'}
            number={count?.projectCount}
          />
          <StatsCard
            img="https://cdn-icons-png.flaticon.com/128/6736/6736258.png"
            title={'Kategori Sayısı'}
            number={count?.categorieCount}
          />
          <StatsCard
            img="https://cdn-icons-png.flaticon.com/512/4922/4922073.png"
            title={'Mesaj Sayısı'}
            number={count?.messageCount}
          />
          <StatsCard
            img="https://cdn-icons-png.flaticon.com/128/2206/2206368.png"
            title={'Admin Sayısı'}
            number={count?.adminCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
