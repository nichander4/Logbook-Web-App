import { Circle, Folder, Grid, Home, Mail, Server } from "react-feather";

export const navigationDataAdmin = [
  {
    id: "home",
    title: "Home",
    roles: ["Admin Master Table Sourcing", "Nego Mgr"],
    section: "E-Sourcing",
    icon: <Home size={24} />,
    href: "/home",
  },
  {
    id: "eContract|asdasdasdd",
    title: "Home",
    roles: ["Admin Master Table Sourcing", "Nego Mgr"],
    section: "E-Sourcing",
    icon: <Home size={24} />,
    href: "/home",
  },
  {
    id: "eContract|d11d212d21",
    title: "Home",
    roles: ["Admin Master Table Sourcing", "Nego Mgr"],
    section: "E-Sourcing",
    icon: <Home size={24} />,
    href: "/home",
  },

  {
    id: "esourcing",
    title: "e-Sourcing",
    roles: [],
    section: "E-Contract",
    icon: <Grid size={24} />,
    // href: "/data_master/data_master",
    children: [
      {
        id: "master",
        title: "Master",
        icon: <Folder size={30} />,
        href: "/master",
        children: [
          {
            id: "master_change_category",
            title: "Change Category",
            icon: <Circle size={12} />,
            href: "/master/change_category",
          },
          {
            id: "master_change_pic",
            title: "Change PIC",
            icon: <Circle size={12} />,
            href: "/master/change_pic",
          },
          {
            id: "master_clustering_document",
            title: "Clustering Document",
            icon: <Circle size={12} />,
            href: "/master/clustering_document",
          },
          {
            id: "master_country",
            title: "Country",
            icon: <Circle size={12} />,
            href: "/master/country",
          },
          {
            id: "master_function_supplier",
            title: "Function Supplier",
            icon: <Circle size={12} />,
            href: "/master/function_supplier",
          },
          {
            id: "master_material_code",
            title: "Info Material Code",
            icon: <Circle size={12} />,
            href: "/master/material_code",
          },
          {
            id: "master_info_material_function",
            title: "Info Material Function",
            icon: <Circle size={12} />,
            href: "/master/info/material_function",
          },
          {
            id: "master_job_list",
            title: "Job List",
            icon: <Circle size={12} />,
            href: "/master/job_list",
          },
          {
            id: "master_manufacturing_site",
            title: "Manufacturing Site",
            icon: <Circle size={12} />,
            href: "/master/manufacturing_site",
          },
          {
            id: "master_pm_type",
            title: "PM Type List",
            icon: <Circle size={12} />,
            href: "/master/pm_type",
          },
          {
            id: "master_qty_per_year",
            title: "Quantity per Year",
            icon: <Circle size={12} />,
            href: "/master/qty_per_year",
          },
          {
            id: "master_request_budget",
            title: "Request Budget",
            icon: <Circle size={12} />,
            href: "/master/request_budget",
          },
          {
            id: "master_scoring",
            title: "Scoring",
            icon: <Circle size={12} />,
            href: "/master/scoring",
          },
          {
            id: "master_supplier_document",
            title: "Supplier Document",
            icon: <Circle size={12} />,
            href: "/master/supplier_document",
          },
          // {
          //   id: "master_target_lt",
          //   title: "Target LT",
          //   icon: <Circle size={12} />,
          //   href: "/master/target_lt",
          //   children: [

          //   ]
          // },
          {
            id: "master_target_lt_ppcr",
            title: "Target LT PPCR",
            icon: <Circle size={12} />,
            href: "/master/target_lt/ppcr",
          },
          {
            id: "master_target_lt_sampel",
            title: "Target LT Sample",
            icon: <Circle size={12} />,
            href: "/master/target_lt/sampel",
          },
          {
            id: "master_target_lt_sourcing",
            title: "Target LT Sourcing",
            icon: <Circle size={12} />,
            href: "/master/target_lt/sourcing",
          },
          {
            id: "master_terms_condition",
            title: "Terms and Condition",
            icon: <Circle size={12} />,
            href: "/master/terms_condition",
          },
          {
            id: "master_user",
            title: "User",
            icon: <Circle size={12} />,
            href: "/master/user",
          },
          {
            id: "master_user_akses",
            title: "User Akses",
            icon: <Circle size={12} />,
            href: "/master/user_akses",
          },
        ],
      },
    ],
  },
];
