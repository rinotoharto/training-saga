import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllPokemon } from '../../store/actions';

const LandingPage = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState();
  const pokemons = useSelector(state => state.invitationReducer.pokemons);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPokemon());
  }, []);

  useEffect(() => {
    if (pokemons?.results) {
      const selectedPokemon = pokemons?.results?.find((el) => el.name.toLowerCase() === 'venusaur');
      setPokemon(selectedPokemon);
    }
  }, [pokemons])

  const redirect = () => {
    navigate('/product');
  }

  return (
    <div>
      Landing Page<br />
      {pokemon?.name}
      <button onClick={redirect}>Go To Product</button>
    </div>
  );
}

export default LandingPage;