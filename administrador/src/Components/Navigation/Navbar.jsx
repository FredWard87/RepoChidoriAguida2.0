import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import logo from "../../assets/img/logoAguida.png";
import { UserContext } from "../../App";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    if (!showLogoutModal) { // Si el modal no está abierto
      setOpen(newOpen);
    }
  };

  const handleLogout = () => {
    setUserData(null);
    navigate('/');
  };

  const confirmLogout = () => {
    setShowLogoutModal(true);
    setOpen(false); // Cerrar el drawer
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="navbar-container">
      <Navbar className="navbar-custom">
        <Container>
          <IconButton onClick={toggleDrawer(true)} aria-label="menu">
            <MenuIcon className="menu-icon" />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList confirmLogout={confirmLogout} />
          </Drawer>
        </Container>
      </Navbar>
      <LogoutModal
        show={showLogoutModal}
        handleClose={handleCloseLogoutModal}
        handleLogout={handleLogout}
      />
    </div>
  );
}

function DrawerList({ confirmLogout }) {
  const drawerItems = [
    { text: "Inicio", href: "/home"},
    { text: "Registro Y visualización de usuarios", href: "/usuariosRegistrados"},
    { text: "Programa", href: "/programa" },
    { text: "Evaluación", href: "/calificaciones" },
    { text: "Auditorias", subItems: [
        { text: "Generar auditoria", href: "/datos" },
        { text: "Revicion de auditoria", href: "/" },
        { text: "Auditorias terminadas", href: "/" }
      ] }
  ];

  return (
    <Box className="drawer-container">
      <List>
        <a href="/home">
          <img src={logo} alt="Logo Empresa" className="logo-img" />
        </a>
        {drawerItems.map((item, index) => (
          <div key={index}>
            {item.subItems ? (
              <Dropdown>
                <Dropdown.Toggle variant="transparent" className="dropdown-toggle">
                  <ListItem disablePadding className="list-item">
                    <ListItemButton>
                      <ListItemText primary={item.text} className="list -item-text" />
                    </ListItemButton>
                  </ListItem>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {item.subItems.map((subItem, subIndex) => (
                    <Dropdown.Item key={subIndex}>
                      <button className="link-button" onClick={() => window.location.href=subItem.href}>
                        {subItem.text}
                      </button>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <ListItem disablePadding className="list-item">
                <ListItemButton>
                  <button className="link-button" onClick={() => window.location.href=item.href}>
                    <ListItemText primary={item.text} className="list-item-text" />
                  </button>
                </ListItemButton>
              </ListItem>
            )}
          </div>
        ))}
        <ListItem disablePadding className="list-item">
          <ListItemButton>
            <button className="link-button" onClick={confirmLogout}>
              <ListItemText primary="Cerrar Sesión" className="list-item-text" />
            </button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

function LogoutModal({ show, handleClose, handleLogout }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Cierre de Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas cerrar sesión?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </Modal.Footer>
    </Modal>
  );
}