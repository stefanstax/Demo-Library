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
            <div className="w-full md:w-4/12 bg-slate-900 text-white drop-shadow-md p-2 rounded my-2">
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
