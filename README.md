# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

_Part 1_: create domain hoangha.com
password: @Son1228

    I. Network and sharing center

    1. setup IP = DNS server:
    + 2008: 10.0.0.1:
    + XP: 10.0.0.2	dns-server: 10.0.0.1 :
    + device status: connected

    2. network adapter
    + 2008: Custom:  VMNet1(Host-only)
    + XP: Host-only: A private network shared with the host
    3. Turn off window firewall

    II. server manager
    + Role -> add roles -> server roles -> active dir domain services -> install -> close
    + configuration -> user -> administrator -> set password @Son1228
    III. run
    + dcpromo -> next -> create a new domain -> next -> YES -> YES


    IV. WIN XP
    + my computer -> properties -> computer name -> change -> domain -> example.com

    V. 2008
    + new pass word + confirm new password -> enter

_Part 2_: create OU Structure

- administrator tool -> active dir user and computer
