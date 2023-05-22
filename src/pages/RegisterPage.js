import React, { useEffect } from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import Container from '../components/Container';
import useLibraryContext from '../hooks/use-library-context';

function RegisterPage() {
    const { members, fetchMembers } = useLibraryContext();
    useEffect(() => {
        fetchMembers();
    }, []);
    return (
        <Container className="w-full h-full min-h-[100vh] flex justify-center items-center bg-slate-50">
            <RegisterForm members={members} />
        </Container>
    );
}

export default RegisterPage;
