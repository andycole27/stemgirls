        roles.admin = {
                        id: "admin",
                        name: "Admin",
                        description: "",
                        resource : [
                        {
                        id : 'blog',
                permissions: ['create', 'read', 'update', 'delete']
                        },
                        {
                        id : 'user',
                permissions: ['create', 'read', 'update', 'delete']
                        },
                        {
                        id : 'journal',
                 permissions: ['create', 'read', 'update', 'delete']
                        },
                        ]
                        };
        roles.editor = {
                        id: "editor",
                        name: "Editor",
                        description: "",
                        resource : [
                        {
                        id : 'blog',
                        permissions: ['create', 'read', 'update', 'delete']
                        },
                        {
                        id : 'user',
                        permissions: ['read']
                         },
                         {
                        id : 'journal',
                        permissions: ['create', 'read', 'update']
                        },
                        ]
    };
    