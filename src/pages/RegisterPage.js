import React, { useEffect } from 'react';
import RegisterForm from '../components/Auth/RegisterForm';
import useLibraryContext from '../hooks/use-library-context';

function RegisterPage() {
    const { members, fetchMembers } = useLibraryContext();
    useEffect(() => {
        fetchMembers();
    }, []);
    return <RegisterForm members={members} />;
}

export default RegisterPage;
