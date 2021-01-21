/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Avatar } from 'antd';
import PokeTag from './PokeTag';
import { capitalizeString, formatNumber } from '../utils/stringUtils';

const { Meta } = Card;

const PokeCard = ({
  loading = false, name, num, specs, types,
}) => {
  // eslint-disable-next-line camelcase
  const { flavor_text_entries } = specs;
  const filteredFlavorTextEntries = flavor_text_entries.filter((el) => (
    el.language.name === 'en' && el.version.name === 'sword'
  ));

  // eslint-disable-next-line camelcase
  const { flavor_text } = filteredFlavorTextEntries[0] ?? '';

  const tags = types.map((el) => (el.type.name));

  return (
    <Card loading={loading}>
      <Meta
        avatar={
          <Avatar src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(num)}.png`} />
                }
        title={`${capitalizeString(name)} #${formatNumber(num)}`}
        description={(
          <>
            {/* eslint-disable-next-line camelcase */}
            <p>{flavor_text}</p>
            {tags.map((type) => (
              <PokeTag type={type} key={type} />
            ))}
          </>
                  )}
      />

    </Card>

  );
};

export default PokeCard;
