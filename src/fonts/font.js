import { createGlobalStyle } from "styled-components";
import SpartanBlack from "./Spartan-Black.ttf";
import SpartanBold from "./Spartan-Bold.ttf";
import SpartanSemiBold from "./Spartan-SemiBold.ttf";
import SpartanMedium from "./Spartan-Medium.ttf";
import SpartanRegular from "./Spartan-Regular.ttf";
import SpartanLight from "./Spartan-Light.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Spartan';
        src: local('Spartan'), local('Spartan'),
        url(${SpartanBlack}) format('ttf'),
        font-weight: 900;
    },
        @font-face {
        font-family: 'Spartan';
        src: local('Spartan'), local('Spartan'),
        url(${SpartanBold}) format('ttf'),
        font-weight: 800;
    },
        @font-face {
        font-family: 'Spartan';
        src: local('Spartan'), local('Spartan'),
        url(${SpartanSemiBold}) format('ttf'),
        font-weight: 700;
    },
        @font-face {
        font-family: 'Spartan';
        src: local('Spartan'), local('Spartan'),
        url(${SpartanMedium}) format('ttf'),
        font-weight: 600;
    }
    ,
        @font-face {
        font-family: 'Spartan';
        src: local('Spartan'), local('Spartan'),
        url(${SpartanRegular}) format('ttf'),
    }
    ,
        @font-face {
        font-family: 'Spartan';
        src: local('Spartan'), local('Spartan'),
        url(${SpartanLight}) format('ttf'),
        font-weight: 500;
    }
    
`;
