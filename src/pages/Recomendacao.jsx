import { Link, Navigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import AuthLayout from "../Layout/AuthLayout";
import Button from "../components/Button";
import Card from "../components/Card";
import { useAuth } from "../context/AuthContext";
import { LoaderBounce } from "../components/Modal/Loader";
import { DispatchAlert } from "../context/AlertContext";
import { showAlert } from "../utils/alertActions";
import Forma, { Input } from "../components/Form";

export default function Recomendacao({}) {
    const { user, appState, api } = useAuth();

    const dispatchAlert = useContext(DispatchAlert);

    if (!user) {
        return <Navigate to="/home" replace />;
    }

    if (appState === "loading") {
        return (
            <section className="h-[90vh] flex items-center justify-center col-span-2">
                <LoaderBounce />
            </section>
        );
    }

    return (
        <AuthLayout>
            <main className="mb-8 gap-4 p-2">
                <h1 className="text-2xl pl-4 pt-4 pb-4 mb-3">
                    Comece agora uma nova trilha, rumo ao profissionalismo!
                </h1>
                <div className="min-h-[50vh] flex">
                    <Card
                        custonClass={
                            "sm:w-[400px] w-[310px] m-auto shadow-2xl bg-transparent"
                        }
                    >
                        <Forma textButton={"Buscar recomendações"}>
                            <Input type={"email"} />
                        </Forma>
                    </Card>
                </div>
            </main>
        </AuthLayout>
    );
}
