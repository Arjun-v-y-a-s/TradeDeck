import React from 'react';
import {render,screen} from '@testing-library/react';
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero.jsx';

describe('hero component',()=>{
    test('render hero image',()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("homeHero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/homeHero.png');
    })
})