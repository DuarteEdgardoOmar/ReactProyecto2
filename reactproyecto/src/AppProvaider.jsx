import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "./componentes/ActionCart";
const AppContext = React.createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const estadoInicial = {
  carrito: [],
  itemsEnCarrito: 0,
};

const reducer = (state, action) => {

  switch (action.type) {
    case TYPES.AGREGAR_ITEM: {
      return {
        ...state,
        carrito: [...state.carrito, action.value],
        itemsEnCarrito: state.itemsEnCarrito + 1,
      };
    }
    case TYPES.SUMAR_UNO: {
      return {
        ...state,
        carrito: state.carrito.map((item)=>item.id===action.value.id?{...item,cantidad:item.cantidad+1}:item),
        itemsEnCarrito: state.itemsEnCarrito + 1,
      };
      
    }
    case TYPES.RESTAR_UNO: {

      let item_a_restar = state.carrito.find((e)=>e.id===action.value)

      return item_a_restar.cantidad>1
        ?{
          ...state,
          carrito: state.carrito.map((item)=>item.id===action.value?{...item,cantidad:item.cantidad-1}:item),
        itemsEnCarrito: state.itemsEnCarrito - 1,
      }:{

        ...state,
        carrito: state.carrito.filter((item)=> item.id !== action.value),
        itemsEnCarrito: state.itemsEnCarrito-1
      }
    }
    case TYPES.QUITAR_ITEM: {
      let item_a_quitar = state.carrito.find((e)=>e.id===action.value)
      return {
        ...state,
        carrito: state.carrito.filter((item)=> item.id !== action.value),
        itemsEnCarrito: state.itemsEnCarrito - item_a_quitar.cantidad,
      };
    }
    case TYPES.LIMPIAR_CARRITO: {
      return estadoInicial;
    }
    default:
      return state;
  }
};

const AppProvaider = ({ children }) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const path = "https://json-server-vercel-peach.vercel.app/products";
    const cargarProductos = async () => {
      try {
        const res = await axios.get(path);
        setProducto(res.data);
      } catch (error) {}
    };
    cargarProductos();
  }, []);

  const [state, dispatch] = useReducer(reducer, estadoInicial);
  return (
    <AppContext.Provider
      value={{
        carrito: state.carrito,
        dispatch,
        itemsEnCarrito: state.itemsEnCarrito,
        producto: producto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvaider, useAppContext };
