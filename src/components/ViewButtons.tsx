import { Button, Menu, Select } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';


export default function ViewButtons() {
  const view = useAppSelector((state) => state.view);

  const dispatch = useAppDispatch();

  function handleClick(view: 'list' | 'tiles') {
    dispatch({ type: 'CHANGE_VIEW', payload: view });
  }

  return (
    <div style={{display: 'flex', gap: '10px'}}>
    <Button onClick={() => handleClick('list')} variant={view === 'list' ? 'gradient' : 'outline'}>
      List
    </Button>
    <Button onClick={() => handleClick('tiles')} variant={view === 'tiles' ? 'gradient' : 'outline'}>
      Tiles
    </Button>
    </div>
  );
};
