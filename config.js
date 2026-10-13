/**
 * Smart Timetable CMS - Global Configuration
 * Version: 11.0 (Updated with TN Govt Official Timings & Constraints)
 */

window.SCHOOL_CONFIG = {
    // 🌟 1. Timings for Classes 6 to 12 (8 Periods based on official schedule)
    regularTimings: [
        { label: '1', start: '09:30 AM', end: '10:15 AM', type: 'class' },
        { label: '2', start: '10:15 AM', end: '11:00 AM', type: 'class' },
        { label: 'Break', start: '11:00 AM', end: '11:10 AM', type: 'break' },
        { label: '3', start: '11:10 AM', end: '11:55 AM', type: 'class' },
        { label: '4', start: '11:55 AM', end: '12:40 PM', type: 'class' },
        { label: 'Lunch', start: '12:40 PM', end: '01:20 PM', type: 'break' },
        { label: '5', start: '01:20 PM', end: '02:00 PM', type: 'class' },
        { label: '6', start: '02:00 PM', end: '02:40 PM', type: 'class' },
        { label: 'Break', start: '02:40 PM', end: '02:50 PM', type: 'break' },
        { label: '7', start: '02:50 PM', end: '03:30 PM', type: 'class' },
        { label: '8', start: '03:30 PM', end: '04:10 PM', type: 'class' }
    ],

    // 🌟 2. Timings for Classes 1 to 5 (Primary Schedule)
    primaryTimings: [
        { label: '1', start: '09:30 AM', end: '11:00 AM', type: 'class' }, // 90 min block
        { label: 'Break', start: '11:00 AM', end: '11:10 AM', type: 'break' },
        { label: '2', start: '11:10 AM', end: '12:40 PM', type: 'class' }, // 90 min block
        { label: 'Lunch', start: '12:40 PM', end: '01:20 PM', type: 'break' },
        { label: 'Lib/Val', start: '01:20 PM', end: '01:45 PM', type: 'class' },
        { label: '3', start: '01:45 PM', end: '03:15 PM', type: 'class' }, // 90 min block
        { label: 'Break', start: '03:15 PM', end: '03:25 PM', type: 'break' },
        { label: '4', start: '03:25 PM', end: '04:10 PM', type: 'class' }  // 45 min block
    ],

    // 🌟 3. Exam Settings
    examSettings: {
        FN: {
            reporting: '09:30 AM',
            reading: '09:45 AM',
            writingStart: '10:00 AM',
            writingEnd: '01:00 PM'
        },
        AN: {
            reporting: '01:30 PM',
            reading: '01:45 PM',
            writingStart: '02:00 PM',
            writingEnd: '04:30 PM'
        }
    },

    // 🌟 4. Exam Patterns
    examPatterns: {
        "Full School (1 to 12)": [
            '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'
        ],
        "High & Hr.Sec Only (6 to 12)": [
            '12', '11', '10', '9', '8', '7', '6'
        ]
    },

    // 🌟 5. Runtime Data (Do not edit manually)
    assignments: [] 
};
