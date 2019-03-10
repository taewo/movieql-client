import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';

const Detail = ({ match: { params: { movieId }} }) => {
    return (
        <Query query={MOVIE_DETAILS} variables={{ movieId }}>
            {({ loading, data, error }) => {
                if (loading) return "loading"
                if (error) return "error"
                return (
                    <React.Fragment>
                        {movieId} / {data.movie.title}
                    </React.Fragment>
                )
            }}

        </Query>
    )
}

export default Detail; 