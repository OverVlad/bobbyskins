import axios from 'axios';
import * as actions from '../constants/roomsConstants';
import {reroute} from '../actions/routingActions';
import { refreshChatroom, joinChatroom } from '../actions/chatroomActions';

/*
 * FETCH ROOMS ACTION CREATORS
 * */
const fetchRoomsStart = function () {
  return {
    type: actions.FETCH_ROOMS_START
  };
};

const fetchRoomsSuccess = function (rooms, done, count) {
  return {
    type: actions.FETCH_ROOMS_SUCCESS,
    rooms,
    count,
    done
  };
};

const fetchRoomsError = function (error) {
  return {
    type: actions.FETCH_ROOMS_ERROR,
    error
  };
};

/*
 * CREATE ROOM ACTION CREATORS
 * */
const createRoomStart = function () {
  return {
    type: actions.CREATE_ROOM_START
  };
};

const createRoomSuccess = function (room) {
  return {
    type: actions.CREATE_ROOM_SUCCESS,
    room
  };
};

const createRoomError = function (error) {
  return {
    type: actions.CREATE_ROOM_ERROR,
    error
  };
};

/*
 * DELETE ROOM ACTION CREATORS
 * */
const deleteRoomStart = function () {
  return {
    type: actions.DELETE_ROOM_START
  };
};

const deleteRoomSuccess = function (roomId) {
  return {
    type: actions.DELETE_ROOM_SUCCESS,
    roomId
  };
};

const deleteRoomError = function (error) {
  return {
    type: actions.DELETE_ROOM_ERROR,
    error
  };
};

/*
 * REQUESTS
 * */
export const fetchRoomsRequest = () => (dispatch, getState) => {
  dispatch(fetchRoomsStart());

  axios.get('/api/rooms')
    .then(rooms => {
      dispatch(fetchRoomsSuccess(rooms.data.rooms, rooms.data.done, rooms.data.count));
    })
    .catch(error => {
      dispatch(fetchRoomsError(error.message));
    });
};

export const fetchPartialRoomsRequest = () => (dispatch, getState) => {
  const {visibilityFilter: sortBy, list: rooms} = getState().rooms;

  const query = {
    params: {
      offset: rooms.length,
      sortBy
    }
  };

  dispatch(fetchPartialRoomsStart());

  axios.get('/api/rooms', query)
    .then(rooms => {
      dispatch(fetchPartialRoomsSuccess(rooms.data.rooms, rooms.data.done, rooms.data.count))
    })
    .catch(error => {
      dispatch(fetchPartialRoomsError(error.message));
    })
};

export const createRoomRequest = (data) => (dispatch, getState) => {
  dispatch(createRoomStart());

  axios.post('/api/rooms', data)
    .then(result => {
      dispatch(createRoomSuccess(result.data.room));
    })
    .catch(error => {
      dispatch(createRoomError(error));
    });
};

export const deleteRoomRequest = (roomId, isFavorite) => (dispatch, getState) => {
  const {user, chatroom} = getState();
  const isActive = chatroom.id === roomId;

  dispatch(deleteRoomStart());

  axios.delete(`/api/rooms/${roomId}`)
    .then(() => {
      dispatch(deleteRoomSuccess(roomId));

      if (isActive) {
        dispatch(reroute('push', '/rooms'));
        dispatch(refreshChatroom());
      }

    })
    .catch(error => {
      dispatch(deleteRoomError(error.message));
    })
};

export const fetchPartialByTagRequest = (tag) => (dispatch, getState) => {
  const {visibilityFilter: sortBy, list: rooms} = getState().rooms;
  const offset = rooms.length && tag ? rooms.length : 0;

  const query = {
    params: {
      tag: tag,
      offset,
      sortBy
    }
  };

  dispatch(fetchPartialRoomsStart());

  axios.get('/api/rooms', query)
    .then(rooms => {
      dispatch(fetchPartialRoomsSuccess(rooms.data.rooms, rooms.data.done, rooms.data.count));
    })
    .catch(error => {
      dispatch(fetchPartialRoomsError(error.message));
    });
};
