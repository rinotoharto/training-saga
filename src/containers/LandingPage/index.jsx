import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
    navigate('/products');
  }

  return (
    <div>
      Landing Page
      <p>{pokemon?.name}</p>
      <button className='btn btn-success' onClick={redirect}>Go To Product dengan Navigate</button><br/>
      <Link to={'/products'}><button className='btn btn-success'>Go To Product dengan Link</button></Link>
    </div>
  );
}

export default LandingPage;