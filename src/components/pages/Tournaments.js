import React from 'react';
import Tournamentscards from '../Tournaments/tournamentcards';
import Currenttournamentcard from '../Tournaments/currenttournamentcard';
import Footer from '../Footer';


function Tournaments() {
    return (
        <>
            <Currenttournamentcard />
            <Tournamentscards/>
            <Footer />
        </>
    );
}

export default Tournaments;
