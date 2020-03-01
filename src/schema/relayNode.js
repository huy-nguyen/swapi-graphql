/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 * @flow strict
 */

import { getObjectFromTypeAndId } from './apiHelper';

import type { GraphQLObjectType } from 'graphql';

import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

import FilmType from './types/film';
import PersonType from './types/person';
import PlanetType from './types/planet';
import SpeciesType from './types/species';
import StarshipType from './types/starship';
import VehicleType from './types/vehicle';
/**
 * Given a "type" in SWAPI, returns the corresponding GraphQL type.
 */
export function swapiTypeToGraphQLType(swapiType: string): GraphQLObjectType {

  switch (swapiType) {
    case 'films':
      return FilmType;
    case 'people':
      return PersonType;
    case 'planets':
      return PlanetType;
    case 'starships':
      return StarshipType;
    case 'vehicles':
      return VehicleType;
    case 'species':
      return SpeciesType;
    default:
      throw new Error('Unrecognized type `' + swapiType + '`.');
  }
}

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    return getObjectFromTypeAndId(type, id);
  },
  obj => {
    const parts = obj.url.split('/');
    return swapiTypeToGraphQLType(parts[parts.length - 3]);
  },
);

export { nodeInterface, nodeField };
