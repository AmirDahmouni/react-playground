import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAppContext } from '../store/context/AppContext';
import { useRecoilState } from 'recoil';
import { counterState } from '../features/counter/recoilState';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/redux/store';

export const Home: React.FC = () => {
  const { user } = useAppContext();
  const [recoilCounter, setRecoilCounter] = useRecoilState(counterState);
  const dispatch = useDispatch();
  const reduxCounter = useSelector((state: any) => state.counter);

  return (
    <div>
      <Typography variant="h4">Welcome, {user.name}</Typography>
      <Typography variant="h6">Recoil Counter: {recoilCounter}</Typography>
      <Button onClick={() => setRecoilCounter((prev) => prev + 1)}>Increment Recoil</Button>
      <Typography variant="h6">Redux Counter: {reduxCounter}</Typography>
      <Button onClick={() => dispatch(increment())}>Increment Redux</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement Redux</Button>
    </div>
  );
};
