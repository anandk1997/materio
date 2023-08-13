"use client"
// ** React Imports
import BlankLayout from "@/@core/layouts/BlankLayout";
import Error404 from "@/app/404";
import { ReactNode } from "react";

// ** Layout Import
// import BlankLayout from '@@/@core/layouts/BlankLayout'

// ** Component Import
// import Error404 from '@/pages/404'

const ErrorPage = () => <Error404 />;

ErrorPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default ErrorPage;
