/* eslint-disable no-undef */
const { UoGInfoRetreiver } = require('../UoGInfoRetreiver');

test('testing geting cis courses from website', async () => {
    var uogReq = new UoGInfoRetreiver();
    var ret = [
        {
            courseCode: 'CIS*1000',
            courseTitle: 'Introduction to Computer Applications',
            avalibleSemesters: ['S', 'F', 'W'],
            courseCredit: 0.5,
            description: 'This course provides a survey of computer systems and software, including an introduction to computer programming, data organization and the social impact of computing. The course emphasizes application packages for personal and business use.',
            restrictions: 'CIS*1200, Not available to students registered in BASC:AHN, BCOMP degree or a CIS minor.',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*1050',
            courseTitle: 'Web Design and Development',
            avalibleSemesters: ['S', 'W'],
            courseCredit: 0.5,
            description: 'An introduction to the basics of designing and developing a website. It examines the basic concepts, technologies, issues and techniques required to develop and maintain websites. The course is suitable for students with no previous programming experience.',
            restrictions: '',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*1200',
            courseTitle: 'Introduction to Computing',
            avalibleSemesters: ['F', 'W'],
            courseCredit: 0.5,
            description: 'This course covers an introduction to computer hardware and software, data organization, problem-solving and programming. The course includes exposure to application packages for personal and business use and is intended forstudents who wish a balance between programming and the use of software packages.',
            restrictions: 'CIS*1000 Not available to students registered in a BCOMP degree or a CIS minor.',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*1250',
            courseTitle: 'Software Design I',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This is an introductory course which involves a general overview of design and problem solving as it is practiced in different disciplines. The course will include an examination of the qualities of software as the end product of the design process. It will include a study of the pervasiveness of software, and the platform specific considerations. The course has an applied focus and will involve software design and development experiences in teams, a literacy component, and the use of software development tools.',
            restrictions: 'Restricted to students in BCOMP:SENG and BCOMP:SENG:C',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*1300',
            courseTitle: 'Programming',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course examines the applied and conceptual aspects of programming. Topics may include data and control structures, program design, problem solving and algorithm design, operating systems concepts, and fundamental programming skills. This course is intended for students who plan to take later CIS courses. If your degree does not require further CIS courses consider CIS*1500 Introduction to Programming.',
            restrictions: 'CIS*1500 This is a Priority Access Course. Enrolment may be restricted to particular programs or specializations. See department for more information.',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*1500',
            courseTitle: 'Introduction to Programming',
            avalibleSemesters: ['F', 'W'],
            courseCredit: 0.5,
            description: 'This course introduces problem-solving, programming and data organization techniques required for applications using a general purpose programming language. Topics include control structures, data representation and manipulation, program logic, development and testing. This course is intended for students who do not intend to enroll in further CIS courses. If your degree requires further CIS courses, CIS*1300, is required.',
            restrictions: 'CIS*1300 Not available to students registered in a BCOMP degree, a CIS minor, BENG:CENG or BENG:ESC.',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*1910',
            courseTitle: 'Discrete Structures in Computing I',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course is an introduction to discrete structures and formal methodologies used in computer science, including Boolean, algebra, propositional logic, predicate logic, proof techniques, set theory, equivalence relations, order relations, and functions.',
            restrictions: '',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2030',
            courseTitle: 'Structure and Application of Microcomputers',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course examines the components of a computer system, including memories, CPU, buses, and input/output subsystems and interface hardware. Programming of these systems is studied, including instruction sets, addressing modes, assembly/machine language programming, development of algorithms for data acquisition, display, and process control.',
            restrictions: '',
            prereqs: ['CIS*1910', ' CIS*2500'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2170',
            courseTitle: 'User Interface Design',
            avalibleSemesters: ['W'],
            courseCredit: 0.75,
            description: 'This course is a practical introduction to the area of user interface construction. Topics include user interface components and their application, best practices for user interface design, approaches to prototyping, and techniques for assessing interface suitability.',
            restrictions: '',
            prereqs: ['1 of CIS*1200', ' CIS*1300', ' CIS*1500'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2250',
            courseTitle: 'Software Design II',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course focuses on the process of software design. Best practices for code development and review will be the examined. The software development process and tools to support this will be studied along with methods for project management. The course has an applied focus and will involve software design and development experiences in teams, a literacy component, and the use of software development tools.',
            restrictions: 'Restricted to BCOMP:SENG majors.',
            prereqs: ['CIS*1250', ' CIS*1300'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2430',
            courseTitle: 'Object Oriented Programming',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course introduces the Object Oriented (OO) approach to programming and algorithm design. Topics will include the creation and use of objects from class libraries, user defined objects, inheritance, modularity, generic code, components, collections and containers, and an introduction to OO design methodologies.',
            restrictions: '',
            prereqs: ['CIS*2500'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2500',
            courseTitle: 'Intermediate Programming',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'In this course students learn to interpret a program specification and implement it as reliable code, as they gain experience with pointers, complex data types, important algorithms, intermediate tools and techniques in problem solving, programming, and program testing.',
            restrictions: '',
            prereqs: ['CIS*1300'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2520',
            courseTitle: 'Data Structures',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course is a study of basic data structures, such as lists, stacks, queues, trees, and tables. Topics which will be examined include abstract data types, sequential and linked representations, and an introduction to algorithm analysis; various traversal, search, insertion, removal, and sorting algorithms.',
            restrictions: '',
            prereqs: ['CIS*2500', ' (1 of CIS*1910', ' ENGG*1500', ' MATH*2000)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2750',
            courseTitle: 'Software Systems Development and Integration',
            avalibleSemesters: ['W'],
            courseCredit: 0.75,
            description: 'This course introduces techniques and tools used in the development of large software systems. Students learn methods for organizing and constructing modular systems, manipulating files, introductory interface design, and use of databases. Software tools for managing projects, database connectivity, configuration management, and system application programmer interfaces are also covered.',
            restrictions: '',
            prereqs: ['CIS*2430', ' CIS*2520'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*2910',
            courseTitle: 'Discrete Structures in Computing II',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course is a further introduction to discrete structures and formal methodologies used in computer science, including sequences, summations, recursion, combinatorics, discrete probability, and graph theory.',
            restrictions: '',
            prereqs: ['CIS*1300', ' (CIS*1910 or ENGG*1500)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3050',
            courseTitle: 'Systems Programming',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course will familiarize students with system level interface tools and their common applications. The purpose, function, design and use of these tools will be explored, allowing students to determine where and when these tools are useful in software development projects. Tools examined in the course include loadable libraries, file system locking, signals, pipes, asynchronous reading/writing to files and memory, file system sockets, shared memory models, and hardware device properties and control.',
            restrictions: '',
            prereqs: ['CIS*3110'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3090',
            courseTitle: 'Parallel Programming',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course examines the current techniques for design and development of parallel programs targeted for platforms ranging from multicore computers to high-performance clusters, with and without shared memory. It includes theoretical models for, and hardware effects on, parallel computation, the definitions of speedup, scalability, and data- versus task-parallel approaches. The course will also examine strategies for achieving speedup based on controlling granularity, resource contention, idle time, threading overhead, work allocation, and data localization.',
            restrictions: '',
            prereqs: ['(CIS*2030 or ENGG*3640)', ' CIS*3110'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3110',
            courseTitle: 'Operating Systems I',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course covers operating systems in theory and practice by focusing on the components in a system: scheduling, resource allocation, process management, multi-programming, multi-tasking, I/O control, file systems, and mechanisms for client-server computing using examples from contemporary operating systems.',
            restrictions: '',
            prereqs: ['CIS*2520', ' (CIS*2030 or ENGG*2410).'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3120',
            courseTitle: 'Digital Systems I',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course examines Boolean algebra, minimization of Boolean expressions, design of combinational and sequential logic circuits, memory design, control, ALU, bus design, microprogramming and CPU design.',
            restrictions: '',
            prereqs: ['CIS*1910', ' CIS*2500'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3130',
            courseTitle: 'System Modeling and Simulation',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course examines discrete simulation based on event queues and random number generation. The topics covered include discrete-event simulation models, random number generators, generating random variates and processes, input modeling, model verification and validation. Application areas such as manufacturing, services, and computing are highlighted.',
            restrictions: 'CIS*2460',
            prereqs: ['CIS*2500', ' STAT*2040'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3150',
            courseTitle: 'Theory of Computation',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course explores the theory of computation including automata theory, Turing machines and their variants, formal languages, parsing, the Halting problem, undecidability, and NP-completeness.',
            restrictions: '',
            prereqs: ['CIS*2750', ' CIS*3490'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3190',
            courseTitle: 'Software for Legacy Systems',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course is an introduction to legacy software systems used in business, manufacturing, and engineering. Topics include COBOL programming, mainframe systems, and integration of legacy systems with contemporary computing systems.',
            restrictions: '',
            prereqs: ['CIS*2500 or work experience in a related field.'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3210',
            courseTitle: 'Computer Networks',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course covers the high-level (protocol) oriented aspects of computer networks, specifically: application, session, transport and network layers. It includes the Internet, socket-level programming, multimedia and quality of service issues. The hardware aspects (switches, LANs, modems, transmission paths) are only covered at a functional level.',
            restrictions: '',
            prereqs: ['CIS*3110'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3250',
            courseTitle: 'Software Design III',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course will examine the historical development of design methodologies and working with legacy systems. It will include an examination of programming paradigms and trends in software design from the past and present. The course has an applied focus and will involve software design and development experiences in teams, a literacy component, and the use of software development tools.',
            restrictions: '',
            prereqs: ['CIS*2250', ' CIS*2500'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3260',
            courseTitle: 'Software Design IV',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course is a study of software architectures and system design methodologies. This will include advanced techniques for project management and experience evaluating software tools. The course has an applied focus and will involve software design and development experiences in teams, a literacy component, and the use of software development tools.',
            restrictions: '',
            prereqs: ['CIS*2750', ' CIS*3250', ' CIS*3760'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3490',
            courseTitle: 'The Analysis and Design of Computer Algorithms',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: "The design and analysis of efficient computer algorithms are studied. Topics which will be studied include: standard methodologies, asymptotic behaviour, optimality, lower bounds, implementation considerations, graph algorithms, matrix computations (e.g. Strassen's method), NP-completeness.",
            restrictions: '',
            prereqs: ['[CIS*1910 or (CIS*2910 and ENGG*1500)]', ' CIS*2520'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3530',
            courseTitle: 'Data Base Systems and Concepts',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course is a study of data organization and data management principles with the perspective of analyzing applications suitable for implementation using a DBMS. This will include an analysis of several data base models, query specification methods, and query processing techniques. Overview of several related issues including concurrency control, security, integrity and recovery. Students will demonstrate concepts through project assignments.',
            restrictions: '',
            prereqs: ['CIS*2520'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3700',
            courseTitle: 'Introduction to Intelligent Systems',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course covers the core topics of Artificial Intelligence, namely: agents and environment, search, knowledge representation, reasoning, and learning. The last three topics are covered using logic as the common formalism for coherence. The course introduces a broad range of basic concepts, terminology, and applications, in addition to providing some specific, widely applicable methodologies.',
            restrictions: '',
            prereqs: ['(CIS*3750 or CIS*3760)', ' (CIS*2460 or STAT*2040)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3750',
            courseTitle: 'System Analysis and Design in Applications',
            avalibleSemesters: ['F', 'W'],
            courseCredit: 0.75,
            description: 'This course is an introduction to the issues and techniques encountered in the design and construction of software systems, focusing on the theory and models of software evolution. Topics include requirements and specifications, prototyping, design principles, object-oriented analysis and design, standards, integration, risk analysis, testing and debugging.',
            restrictions: '',
            prereqs: ['CIS*2750'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*3760',
            courseTitle: 'Software Engineering',
            avalibleSemesters: ['F', 'W'],
            courseCredit: 0.75,
            description: 'This course is an examination of the software engineering process, the production of reliable systems and techniques for the design and development of complex software. Topics include object-oriented analysis, design and modeling, software architectures, software reviews, software quality, software engineering, ethics, maintenance and formal specifications.',
            restrictions: '',
            prereqs: ['CIS*3750'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4010',
            courseTitle: 'Cloud Computing',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course introduces students to fundamentals of cloud computing and software development for cloud platforms. It covers topics such as virtualization, architecture of cloud systems, programming for the cloud, resource management, as well as privacy and security issues.',
            restrictions: '',
            prereqs: ['CIS*3110'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4020',
            courseTitle: 'Data Science',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'Data Science focuses on extracting the important relations in data. The course is intended as a survey of the discipline and focuses on applied computational methods for data analysis. Topics include algorithms, computational and machine learning methods, software tools, and modeling, as they apply to the analysis of and discovery in big data.',
            restrictions: '',
            prereqs: ['CIS*2750', ' MATH*1160', ' STAT*2040'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4030',
            courseTitle: 'Mobile Computing',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course introduces students to mobile computing and mobile application development. It examines mobile technology, application development, user interaction, data storage, and software tools.',
            restrictions: '',
            prereqs: ['CIS*2030', ' CIS*2750', ' CIS*3110'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4050',
            courseTitle: 'Digital Systems II',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course examines central processor architectures, control and microprogramming, memory systems, special architectures, underlying support for special architectures, architectures suitable for very large scale integration.',
            restrictions: '',
            prereqs: ['CIS*3110', ' CIS*3120'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4150',
            courseTitle: 'Software Reliability and Testing',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course serves as an introduction to systematic methods of testing and verification, covering a range of static and dynamic techniques and their use within the software development process. Concepts such as defining necessary reliability, developing operational profiles, techniques to improve and predict software reliability, preparing and executing tests, black box testing, white box testing, unit testing, system testing, and integration testing will be explained.',
            restrictions: '',
            prereqs: ['CIS*3750 or CIS*3760'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4250',
            courseTitle: 'Software Design V',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This is a capstone course which applies the knowledge gained from the previous Software Design courses to a large team project. The course has an applied focus and will involve software design and development experiences in teams, a literacy component, and the use of software development tools.',
            restrictions: '',
            prereqs: ['CIS*2750', ' CIS*3260'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4300',
            courseTitle: 'Human Computer Interaction',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course examines the methods for user interface software design, including interface representations and testing. Topics which will be studied include the evaluation and design of sample application systems, impacts of computer-based information systems on individuals and organizations, implementation and testing tools, and planning of learning stages and design of assistance subsystems.',
            restrictions: '',
            prereqs: ['CIS*3110', ' (CIS*3750 or CIS*3760)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4450',
            courseTitle: 'Special Topics in Information Science',
            avalibleSemesters: ['U'],
            courseCredit: 0.5,
            description: 'A variety of advanced topics mainly from areas within general information processing. Subject areas discussed in any particular semester will depend on the interests of the students and the instructor. Students should check with the School of Computer Science to determine what topic will be offered during specific semesters and which prerequisites, if any, are appropriate.',
            restrictions: 'Instructor consent required.',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4500',
            courseTitle: 'Special Topics in Computing Science',
            avalibleSemesters: ['U'],
            courseCredit: 0.5,
            description: 'A variety of advanced topics within Computing Science. Subject areas discussed in any particular semester will depend upon the interests of both the students and the instructor. Students should check with the School of Computer Science to determine what topic will be offered during specific semesters and which prerequisites, if any, are appropriate.',
            restrictions: 'Instructor consent required.',
            prereqs: [],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4510',
            courseTitle: 'Computer Security Foundations',
            avalibleSemesters: ['F'],
            courseCredit: 0.5,
            description: 'This course covers basic concepts and practices in computer and network security. This includes topics such as fundamental concepts of computer security, network security, threat landscape, threat intelligence and attack methods, ethical hacking concepts and other hacking techniques, security technology and security policies, and cloud security.',
            restrictions: 'CIS*4110',
            prereqs: ['CIS*3210'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4520',
            courseTitle: 'Introduction to Cryptography',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course is an introduction to the foundations of modern cryptography, with an eye toward practical applications. Topics covered include classical systems, information theory, mathematical background material, symmetric and asymmetric crypto-systems and their cryptanalysis, hash functions and message authentication (MAC), provable security, key-exchange and management, authentication and digital signatures. Importance of learning Cryptography in Digital Forensics will also be discussed',
            restrictions: 'CIS*4110',
            prereqs: ['CIS*3490'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4650',
            courseTitle: 'Compilers',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course is a detailed study of the compilation process. Topics include interpreters, overall design implementation of a compiler, techniques for parsing, building and manipulating intermediate representations of a program, implementation of important features, code generation and optimization.',
            restrictions: '',
            prereqs: ['CIS*2030', ' CIS*3110', ' CIS*3150'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4720',
            courseTitle: 'Image Processing and Vision',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course is an introduction to the process of image processing. Emphasis is placed on topics such as image enhancement, segmentation morphological analysis, texture analysis, visualization and image transformations. Applications of image processing in medicine, forensics, food and security are surveyed.',
            restrictions: '',
            prereqs: ['CIS*2750', ' CIS*3110', ' (CIS*2460 or STAT*2040)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4780',
            courseTitle: 'Computational Intelligence',
            avalibleSemesters: ['U'],
            courseCredit: 0.5,
            description: 'This course introduces concepts of soft computing: modelling uncertainty, granular computing, neurocomputing, evolutionary computing, probabilistic computing and soft computing for software engineering.',
            restrictions: '',
            prereqs: [
                'CIS*3490',
                ' (CIS*3750 or CIS*3760)',
                ' (CIS*2460 or STAT*2040)'
            ],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4800',
            courseTitle: 'Computer Graphics',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course is an introduction to computer graphics. Topics include graphics programming concepts, geometrical transformations, viewing 3-D projections, raster graphics, sculptured surfaces, visible surface determination, image processing and other special topics. Practical issues will be covered by assignment using currently available graphics equipment.',
            restrictions: '',
            prereqs: ['CIS*3110', ' (CIS*3750 or CIS*3760)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4820',
            courseTitle: 'Game Programming',
            avalibleSemesters: ['W'],
            courseCredit: 0.5,
            description: 'This course will focus on the components found in modern 3-D game engines. It will emphasize the algorithms and data structures required to create real-time computer graphics, sound and network communications.',
            restrictions: '',
            prereqs: ['CIS*3110', ' (CIS*3750 or CIS*3760)'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4900',
            courseTitle: 'Computer Science Project',
            avalibleSemesters: ['S', 'F', 'W'],
            courseCredit: 0.5,
            description: 'Planning, developing and writing a research proposal under individual faculty supervision. The course, in continuation with CIS*4910 provides senior undergraduates an opportunity to pursue an independent course of study. The topic selected will be determined by agreement between the student and the faculty member with expertise in the area.',
            restrictions: 'Instructor consent required.',
            prereqs: ['7.00 credits in CIS'],
            equates: [],
            Department: 'School of Computer Science'
        },
        {
            courseCode: 'CIS*4910',
            courseTitle: 'Computer Science Thesis',
            avalibleSemesters: ['S', 'F', 'W'],
            courseCredit: 0.5,
            description: 'This course is a continuation of CIS*4900. The student will conduct and write an undergraduate thesis under the individual supervision of a faculty member. In addition the student is required to present their work in a seminar and also participate in the critical analysis and review of the work of other students taking this course.',
            restrictions: 'Instructor consent required.',
            prereqs: ['CIS*4900'],
            equates: [],
            Department: 'School of Computer Science'
        }
    ];
    await expect(uogReq.getSubjectCourses('2020-2021', 'cis')).resolves.toStrictEqual(ret);
});

test('testing Invaild subject input ', async () => {
    var uogReq = new UoGInfoRetreiver();
    await expect(uogReq.getSubjectCourses('2020-2021', 'blah')).resolves.toStrictEqual([]);
});

test('testing Invaild year input ', async () => {
    var uogReq = new UoGInfoRetreiver();
    await expect(uogReq.getSubjectCourses('2030-2021', 'cis')).resolves.toStrictEqual([]);
});

test('Testing geting cis enum ', async () => {
    var uogReq = new UoGInfoRetreiver();
    expect(uogReq.CourseSections.CIS).toStrictEqual({ code: 'cis', section: 'Computing and Information Science' });
});

test('Testing geting cis enum via string', async () => {
    var uogReq = new UoGInfoRetreiver();
    // eslint-disable-next-line dot-notation
    expect(uogReq.CourseSections['CIS']).toStrictEqual({ code: 'cis', section: 'Computing and Information Science' });
});

test('Testing geting ivalid enum via string', async () => {
    var uogReq = new UoGInfoRetreiver();
    // eslint-disable-next-line dot-notation
    expect(uogReq.CourseSections['Blash']).toStrictEqual(undefined);
});
