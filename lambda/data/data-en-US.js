const data = {
    "January" : [
        {Date : "1",    Day : "Monday",     Event : "New Year's Day",               reason : "Restricted Holiday" },
        {Date : "5",    Day : "Friday",     Event : "Guru Govind Singh Jayanti",    reason : "Restricted Holiday" },
        {Date : "14",   Day : "Sunday",     Event : "Pongal",                       reason : "Restricted Holiday" },
        {Date : "14",   Day : "Sunday",     Event : "Makar Sankranti",              reason : "Restricted Holiday" },
        {Date : "22",   Day : "Monday",     Event : "Vasant Panchami",              reason : "Restricted Holiday" },
        {Date : "26",   Day : "Friday",     Event : "Republic Day",                 reason : "Gazetted Holiday" },
        {Date : "31",   Day : "Wednesday",  Event : "Guru Ravidas Jayanti",         reason : "Restricted Holiday" }
    ],
    "February" : [ 
        {Date : "10",   Day : "Saturday",   Event : "Maharishi Dayanand Saraswati Jayanti", reason : "Restricted Holiday" },
        {Date : "13",   Day : "Tuesday",    Event : "Maha Shivaratri/Shivaratri",           reason : "Gazetted Holiday" },
        {Date : "14",   Day : "Wednesday",  Event : "Valentine's Day",                      reason : "Observance" },
        {Date : "16",   Day : "Friday",     Event : "Chinese New Year",                     reason : "Observance" },
        {Date : "19",   Day : "Monday",     Event : "Shivaji Jayanti",                      reason : "Restricted Holiday" }
    ],
    "March" : [
        {Date : "1",    Day : "Thursday",   Event : "Holika Dahana",                        reason : "Restricted Holiday" },
        {Date : "2",    Day : "Friday",     Event : "Holi",                                 reason : "Restricted Holiday" },
        {Date : "18",   Day : "Sunday",     Event : "Chaitra Sukhladi",                     reason : "Restricted Holiday" },
        {Date : "20",   Day : "Tuesday",    Event : "March equinox",                        reason : "Season" },
        {Date : "25",   Day : "Sunday",     Event : "Rama Navami",                          reason : "Gazetted Holiday" },
        {Date : "29",   Day : "Thursday",   Event : "Maundy Thursday",                      reason : "Observance, Christian" },
        {Date : "29",   Day : "Thursday",   Event : "Mahavir Jayanti",                      reason : "Gazetted Holiday" },
        {Date : "30",   Day : "Friday",     Event : "Good Friday",                          reason : "Gazetted Holiday" },
        {Date : "31",   Day : "Saturday",   Event : "First day of Passover",                reason : "Observance" }
    ],
    "April" : [
        {Date : "1",    Day : "Sunday",     Event : "Hazarat Ali's Birthday",               reason : "Restricted Holiday" },
        {Date : "1",    Day : "Sunday",     Event : "Easter Day",                           reason : "Restricted Holiday" },
        {Date : "14",   Day : "Saturday",   Event : "Vaisakhi",                             reason : "Restricted Holiday" },
        {Date : "14",   Day : "Saturday",   Event : "Ambedkar Jayanti",                     reason : "Observance" },
        {Date : "15",   Day : "Sunday",     Event : "Mesadi/Vaisakhadi",                    reason : "Restricted Holiday" },
        {Date : "30",   Day : "Monday",     Event : "Buddha Purnima/Vesak",                 reason : "Gazetted Holiday" }
    ],
    "May" : [
        {Date : "1",    Day : "Tuesday",    Event : "May Day",                              reason : "Observance" },
        {Date : "9",    Day : "Wednesday",  Event : "Birthday of Ravindranath",             reason : "Restricted Holiday" },
        {Date : "13",   Day : "Sunday",     Event : "Mother's Day",                         reason : "Observance" }
    ],
    "June": [
        {Date : "15",   Day : "Friday",     Event : "Ramzan Id/Eid-ul-Fitar",               reason : "Festival" },
        {Date : "15",   Day : "Friday",     Event : "Jamat Ul-Vida",                        reason : "Restricted Holiday" },
        {Date : "17",   Day : "Sunday",     Event : "Father's Day",                         reason : "Observance" },
        {Date : "21",   Day : "Thursday",   Event : "June Solstice",                        reason : "Season" }
    ],
    "July" : [
        {Date : "14",   Day : "Saturday",   Event : "Rath Yatra",                           reason : "Restricted Holiday" }
    ],
    "August" : [
        {Date : "5",    Day : "Sunday",     Event : "Friendship Day",                       reason : "Observance" },
        {Date : "15",   Day : "Wednesday",  Event : "Independence Day",                     reason : "Gazetted Holiday" },
        {Date : "17",   Day : "Friday",     Event : "Parsi New Year",                       reason : "Restricted Holiday" },
        {Date : "22",   Day : "Wednesday",  Event : "Bakr Id/Eid ul-Adha",                  reason : "Gazetted Holiday" },
        {Date : "25",   Day : "Saturday",   Event : "Onam",                                 reason : "Restricted Holiday" },
        {Date : "26",   Day : "Sunday",     Event : "Raksha Bandhan",                       reason : "Restricted Holiday" }
    ],
    "September" : [
        {Date : "3",    Day : "Monday",     Event : "Janmashtami",                          reason : "Gazetted Holiday" },
        {Date : "13",   Day : "Thursday",   Event : "Ganesh Chaturthi/Vinayaka Chaturthi",  reason : "Restricted Holiday" },
        {Date : "21",   Day : "Friday",     Event : "Muharram/Ashura",                      reason : "Gazetted Holiday" },
        {Date : "23",   Day : "Sunday",     Event : "September equinox",                    reason : "Season" }
    ],
    "October" : [
        {Date : "2",    Day : "Tuesday",    Event : "Mahatma Gandhi Jayanti",               reason : "Gazetted Holiday" },
        {Date : "16",   Day : "Tuesday",    Event : "Maha Saptami",                         reason : "Restricted Holiday" },
        {Date : "17",   Day : "Wednesday",  Event : "Maha Navami",                          reason : "Restricted Holiday" },
        {Date : "17",   Day : "Wednesday",  Event : "Maha Ashtami",                         reason : "Restricted Holiday" },
        {Date : "19",   Day : "Friday",     Event : "Dussehra",                             reason : "Gazetted Holiday" },
        {Date : "24",   Day : "Wednesday",  Event : "Maharishi Valmiki Jayanti",            reason : "Restricted Holiday" },
        {Date : "27",   Day : "Saturday",   Event : "Karaka Chaturthi",                     reason : "Restricted Holiday" },
        {Date : "31",   Day : "Wednesday",  Event : "Halloween",                            reason : "Observance" }
    ],
    "November" : [
        {Date : "6",    Day : "Tuesday",    Event : "Naraka Chaturdasi",                    reason : "Restricted Holiday" },
        {Date : "7",    Day : "Wednesday",  Event : "Diwali/Deepavali",                     reason : "Gazetted Holiday" },
        {Date : "8",    Day : "Thursday",   Event : "Govardhan Puja",                       reason : "Restricted Holiday" },
        {Date : "9",    Day : "Friday",     Event : "Bhai Duj",                             reason : "Restricted Holiday" },
        {Date : "13",   Day : "Tuesday",    Event : "Chhat Puja",                           reason : "Restricted Holiday" },
        {Date : "21",   Day : "Wednesday",  Event : "Milad un-Nabi/Id-e-Milad",             reason : "Gazetted Holiday" },
        {Date : "23",   Day : "Friday",     Event : "Guru Nanak Jayanti",                   reason : "Gazetted Holiday" },
        {Date : "24",   Day : "Saturday",   Event : "Guru Tegh Bahadur's Martyrdom Day",    reason : "Restricted Holiday" }
    ],
    "December" : [
        {Date : "3",    Day : "Monday",     Event : "First Day of Hanukkah",                reason : "Observance" },
        {Date : "10",   Day : "Monday",     Event : "Last day of Hanukkah",                 reason : "Observance" },
        {Date : "21",   Day : "Friday",     Event : "December Solstice",                    reason : "Season" },
        {Date : "24",   Day : "Monday",     Event : "Christmas Eve",                        reason : "Restricted Holiday" },
        {Date : "25",   Day : "Tuesday",    Event : "Christmas",                            reason : "Gazetted Holiday" },
        {Date : "31",   Day : "Monday",     Event : "New Year's Eve",                       reason : "Observance" }
    ]
};

const SKILL_NAME = 'New year calender';
const WELCOME_MESSAGE = "What month should I tell about?"
const GET_FACT_MESSAGE = "Here are the details <break time='1s'/>";
const HELP_MESSAGE = 'You can say tell me a about January or any other month or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
