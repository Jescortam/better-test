import { createReducer, createAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import Collection from '../interfaces/Collection';

interface CollectionState {
  [key: string]: Collection;
}

const fetchAll = createAction<Collection[], 'FETCH_ALL'>('FETCH_ALL');
const createCollection = createAction<Collection, 'CREATE_COLLECTION'>(
  'CREATE_COLLECTION'
);
const fetchCollection = createAction<Collection, 'FETCH_COLLECTION'>(
  'FETCH_COLLECTION'
);
const updateCollection = createAction<Collection, 'UPDATE_COLLECTION'>(
  'UPDATE_COLLECTION'
);
const deleteCollection = createAction<Collection, 'DELETE_COLLECTION'>(
  'DELETE_COLLECTION'
);

const collectionsReducer = createReducer({}, (builder) => {
  builder
    .addCase(fetchAll, (state: CollectionState, action) => {
      const fetchedCollections = _.keyBy(action.payload, '_id');
      return { ...state, ...fetchedCollections };
    })
    .addCase(createCollection, (state: CollectionState, action) => {
      return { ...state, [action.payload._id]: action.payload };
    })
    .addCase(fetchCollection, (state: CollectionState, action) => {
      return { ...state, [action.payload._id]: action.payload };
    })
    .addCase(updateCollection, (state: CollectionState, action) => {
      return { ...state, [action.payload._id]: action.payload };
    })
    .addCase(deleteCollection, (state: CollectionState, action) => {
      return _.omit(state, [action.payload._id]);
    });
});
