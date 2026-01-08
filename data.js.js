// data.js - This is your "database"
const vacationClubData = {
  // Last updated timestamp
  lastUpdated: "2024-03-15",
  
  // Member data
  members: [
    {
      id: "VC-001",
      firstName: "Purcy",
      lastName: "Cicilia",
      email: "pracins@yahoo.com",
      phone: "+59995120536",
      joinDate: "2026-01-08",
      status: "active",
      isPaid: true,
      password: "1234", // Simple PIN for login
      photo: "avatar1.png", // optional
      notes: "Prefers beachfront properties"
    },
    {
      id: "VC-002",
      firstName: "Maria",
      lastName: "Garcia",
      email: "maria@email.com",
      phone: "+1234567891",
      joinDate: "2024-02-01",
      status: "active",
      isPaid: true,
      password: "2345",
      photo: "avatar2.png",
      notes: "VIP member"
    }
    // Add up to 300 members here
  ],
  
  // Hotel data
  hotels: [
    {
      id: "HOTEL-001",
      name: "HOTEL SAN MARCO",
      logo: "hotel1-logo.png",
      location: "WILLEMSTAD, CW",
      description: "Luxury ROOMS resort with spa and fine dining",
      contact: {
        name: "Robert Johnson",
        phone: "+59997671234",
        email: "robert@sanmarco.com"
      },
      promos: [
        {
          id: "PROMO-001",
          title: "20% Off All Rooms",
          description: "Valid for any room type. Free breakfast included.",
          validFrom: "2026-03-01",
          validTo: "2026-07-31",
          instructions: "Call booking desk and mention code: VC-Curacao",
          terms: "Min 2-night stay. Not valid during holidays.",
          promoCode: "VC-KARNAVAL"
        },
        {
          id: "PROMO-002",
          title: "Free Room Upgrade",
          description: "Complimentary upgrade to ocean view (subject to availability)",
          validFrom: "2026-04-01",
          validTo: "2026-06-30",
          instructions: "Book directly with hotel manager at +59997671234",
          terms: "Must book at least 7 days in advance."
        }
      ],
      booking: {
        phone: "+59997671234",
        website: "ZIE FACEBOOK",
        note: "Ask for VC-cURACAO booking desk"
      },
      verification: {
        password: "vc1234", // Hotel staff password
        contact: "Robert Johnson"
      }
    },
    {
      id: "HOTEL-002",
      name: "Mountain Lodge",
      logo: "hotel2-logo.png",
      location: "Aspen, CO",
      description: "Ski-in/ski-out luxury lodge",
      contact: {
        name: "Susan Miller",
        phone: "+1987654322",
        email: "susan@mountainlodge.com"
      },
      promos: [
        {
          id: "PROMO-003",
          title: "15% Off + Free Ski Rental",
          description: "Discount on rooms plus complimentary ski equipment",
          validFrom: "2024-11-15",
          validTo: "2025-03-31",
          instructions: "Book online using promo code: VC-SKI15",
          terms: "Valid for stays of 3+ nights.",
          promoCode: "VC-SKI15"
        }
      ],
      booking: {
        phone: "+1987654322",
        website: "https://mountainlodge.com/vc-special",
        note: "Select 'Vacation Club Member' rate"
      },
      verification: {
        password: "MOUNTAIN456",
        contact: "Susan Miller"
      }
    },
    {
      id: "HOTEL-003",
      name: "City Hotel",
      logo: "hotel3-logo.png",
      location: "New York, NY",
      description: "Boutique hotel in downtown Manhattan",
      contact: {
        name: "Michael Brown",
        phone: "+1987654323",
        email: "michael@cityhotel.com"
      },
      promos: [
        {
          id: "PROMO-004",
          title: "10% Off + Free Parking",
          description: "Room discount with complimentary parking",
          validFrom: "2024-01-01",
          validTo: "2024-12-31",
          instructions: "Call direct line and provide member ID",
          terms: "Parking limited to one vehicle."
        }
      ],
      booking: {
        phone: "+1987654323",
        website: "https://cityhotel.com/member-deals",
        note: "Special VC phone line: ext. 555"
      },
      verification: {
        password: "CITY789",
        contact: "Michael Brown"
      }
    }
    // Add up to 30 hotels
  ],
  
  // Check-ins/redemptions
  checkins: [
    {
      id: "CHECK-001",
      memberId: "VC-001",
      hotelId: "HOTEL-001",
      date: "2024-03-10",
      promoUsed: "PROMO-001",
      notes: "Stayed 3 nights, used 20% discount",
      verifiedBy: "Robert Johnson"
    },
    {
      id: "CHECK-002",
      memberId: "VC-002",
      hotelId: "HOTEL-002",
      date: "2024-02-20",
      promoUsed: "PROMO-003",
      notes: "Ski trip, used ski rental promo",
      verifiedBy: "Susan Miller"
    }
  ]
};

// Helper functions
function getMemberById(id) {
  return vacationClubData.members.find(m => m.id === id);
}

function getHotelById(id) {
  return vacationClubData.hotels.find(h => h.id === id);
}

function addCheckin(memberId, hotelId, promoId, notes) {
  const newCheckin = {
    id: "CHECK-" + (vacationClubData.checkins.length + 1).toString().padStart(3, '0'),
    memberId,
    hotelId,
    date: new Date().toISOString().split('T')[0],
    promoUsed: promoId,
    notes,
    verifiedBy: "Hotel Staff"
  };
  vacationClubData.checkins.push(newCheckin);
  return newCheckin;
}

// Export for use in HTML files
if (typeof module !== 'undefined') {
  module.exports = { vacationClubData, getMemberById, getHotelById, addCheckin };
}