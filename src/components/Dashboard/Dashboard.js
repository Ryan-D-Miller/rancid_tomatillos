import React from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import MovieFocus from '../MovieFocus/MovieFocus'
import './Dashboard.css';
import {  Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransitionGroup, CSSTransition } from 'react-transition-group';

export default function Dashboard(props) {

        return (
            <main
                className="dashboard">
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => {
                            return <MovieCarousel
                                checkMoviesLength={props.checkMoviesLength}
                                displayMovies={props.displayMovies}
                                updateDisplayStart={props.updateDisplayStart}
                                moveDirection={props.moveDirection} 
                                isButtonDisabled={props.isButtonDisabled}/>
                        }}
                    />
                    <Route
                        exact
                        path='/:id'
                        render={({ match }) => {
                            const { id } = match.params
                            return <MovieFocus id={id} />
                        }}
                    />
                    <Redirect to="/" />
                </Switch>
            </main>
        )
    }
