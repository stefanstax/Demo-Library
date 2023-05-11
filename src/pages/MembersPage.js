import React, { useEffect } from 'react';
import Container from '../components/Container';
import useLibraryContext from '../hooks/use-library-context';

const MembersPage = () => {
    const { members, fetchMembers } = useLibraryContext();

    useEffect(() => {
        fetchMembers();
    }, []);

    const displayMembers = members.map((member) => {
        return (
            <div className="w-full md:w-4/12 bg-slate-50 drop-shadow-md p-2 rounded">
                <h3>{member?.firstName}</h3>
                <h4>{member?.lastName}</h4>
                <span>{member?.username}</span>
            </div>
        );
    });
    return (
        <Container secondary className={'my-24'}>
            {displayMembers}
        </Container>
    );
};

export default MembersPage;
