const data = {
  users: [
    {
      "id": "7c5dae5552338874e5053f2534d2767a",
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Appleseed",
      "username": "cfuser12345",
      "telephone": "+1 123-123-1234",
      "country": "US",
      "zipcode": "12345",
      "created_on": "2014-01-01T05:20:00Z",
      "modified_on": "2014-01-01T05:20:00Z",
      "two_factor_authentication_enabled": false 
    },
    {
      "id": "8c4dae5550338625e6287f2534d3005y",
      "email": "firstname.lastname@examplewebsite.com",
      "first_name": "Julia",
      "last_name": "Peartree",
      "username": "juliapeartree",
      "telephone": "+1 555-555-5555",
      "country": "US",
      "zipcode": "12345",
      "created_on": "2017-08-01T05:30:00Z",
      "modified_on": "2017-08-01T05:40:00Z",
      "two_factor_authentication_enabled": false 
    },
  ],
  zones: [
    {
     "id": "023e105f4ecef8ad9ca31a8372d0c353",
      "name": "example.com",
      "development_mode": 7200,
      "original_name_servers": [
        "ns1.originaldnshost.com",
        "ns2.originaldnshost.com"
      ],
      "original_registrar": "GoDaddy",
      "original_dnshost": "NameCheap",
      "created_on": "2014-01-01T05:20:00.12345Z",
      "modified_on": "2014-01-01T05:20:00.12345Z",
      "owner": {
        "id": "7c5dae5552338874e5053f2534d2767a",
        "email": "user@example.com",
        "owner_type": "user"
      },
      "permissions": [
        "#zone:read",
        "#zone:edit"
      ],
      "plan": {
        "id": "e592fd9519420ba7405e1307bff33214",
        "name": "Pro Plan",
        "price": 20,
        "currency": "USD",
        "frequency": "monthly",
        "legacy_id": "pro",
        "is_subscribed": true,
        "can_subscribe": true
      },
      "plan_pending": {
        "id": "e592fd9519420ba7405e1307bff33214",
        "name": "Pro Plan",
        "price": 20,
        "currency": "USD",
        "frequency": "monthly",
        "legacy_id": "pro",
        "is_subscribed": true,
        "can_subscribe": true
      },
      "status": "active",
      "paused": false,
      "type": "full",
      "name_servers": [
        "tony.ns.cloudflare.com",
        "woz.ns.cloudflare.com"
      ]
    }
  ],
  organizations: [
    {
      "id": "01a7362d577a6c3019a474fd6f485823",
      "name": "Cloudflare, Inc.",
      "members": [
        {
          "id": "7c5dae5552338874e5053f2534d2767a",
          "name": "John Smith",
          "email": "user@example.com",
          "status": "accepted",
          "roles": [
            {
              "id": "3536bcfad5faccb999b47003c79917fb",
              "name": "Organization Admin",
              "description": "Administrative access to the entire Organization",
              "permissions": [
                "#zones:read"
              ]
            }
          ]
        }
      ],
      "invites": [
        {
          "id": "4f5f0c14a2a41d5063dd301b2f829f04",
          "invited_member_id": "5a7805061c76ada191ed06f989cc3dac",
          "invited_member_email": "user@example.com",
          "organization_id": "5a7805061c76ada191ed06f989cc3dac",
          "organization_name": "Cloudflare, Inc.",
          "roles": [
            {
              "id": "3536bcfad5faccb999b47003c79917fb",
              "name": "Organization Admin",
              "description": "Administrative access to the entire Organization",
              "permissions": [
                "#zones:read"
              ]
            }
          ],
          "invited_by": "user@example.com",
          "invited_on": "2014-01-01T05:20:00Z",
          "expires_on": "2014-01-01T05:20:00Z",
          "status": "accepted"
        }
      ],
      "roles": [
        {
          "id": "3536bcfad5faccb999b47003c79917fb",
          "name": "Organization Admin",
          "description": "Administrative access to the entire Organization",
          "permissions": [
            "#zones:read"
          ]
        }
      ]
    }
  ],
  roles: [
    {
      "id": "3536bcfad5faccb999b47003c79917fb",
      "name": "Account Administrator",
      "description": "Administrative access to the entire Account",
      "permissions": {
        "analytics": {
          "read": true,
          "write": true
        },
        "billing": {
          "read": true,
          "write": true
        },
        "cache_purge": {
          "read": true,
          "write": true
        },
        "dns": {
          "read": true,
          "write": true
        },
        "dns_records": {
          "read": true,
          "write": true
        },
        "lb": {
          "read": true,
          "write": true
        },
        "logs": {
          "read": true,
          "write": true
        },
        "organization": {
          "read": true,
          "write": true
        },
        "ssl": {
          "read": true,
          "write": true
        },
        "waf": {
          "read": true,
          "write": true
        },
        "zones": {
          "read": true,
          "write": true
        },
        "zone_settings": {
          "read": true,
          "write": true
        }
      }
    }
  ],
  footer: {
    secondaryNav: [
      {
        text: 'System status',
        href: 'https://cloudflarestatus.com',
      },
      {
        text: 'API docs',
        href: 'https://api.cloudflare.com',
      },
      {
        text: 'Developers',
        href: 'https://developers.cloudflare.com',
      },
    ],
  }
}

export default data
