<script>
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/ui/avatar";
	import { Badge } from "$lib/components/ui/badge";
	import { Separator } from "$lib/components/ui/separator";
	import { Progress } from "$lib/components/ui/progress";
	import { Github, Linkedin, Mail, BookOpen, Moon, Sun, Divide } from "lucide-svelte";

    let description = "Software engineer with over five years of Web2 development expertise and a robust foundation in Web3 technology from the prestigious Polkadot Blockchain Academy. Eager to collaborate on projects that leverage my skills to drive Web3 innovation."

    let skills = [
		{ name: "Back-End", level: 95 },
		{ name: "Front-End", level: 95 },
		{ name: "Testing", level: 85 },
		{ name: "System", level: 90 },
	];

	let experiences = [
		{
			company: "OCUS",
			role: "Front-end Developer - Typescript, NuxtJS & VueJS",
			period: "2019 - 2020 • 1.2 year",
			description: "A global creative hub with 200k+ monthly image uploads, connecting users with 35k+ creators from 120+ countries.",
			achievements: ["Feature migration from Laravel to NuxtJS", "Implement complex highly reactive components", "Complex app with shared processes over 3 dashboards", "Refine business logic through discussions and collegial decisions"],
		},
		{
			company: "AUTOVOISUAL",
			role: "Fullstack Developer - Typescript, Express & NuxtJS",
			period: "2019 • 6 month",
			description: "Analyzing the UE used car market with +100k classified ads daily on +150 websites.",
			achievements: ["Refactor SQL queries", "Autonomous environment", "Implement front-end features on the B2B product", "Refactor Express.js backend features of the B2C product", "POC of the B2C website to migrate from Backbone to NuxtJS"],
		},
	];

	function openLink(url) {
		window.open(url, "_blank", "noopener,noreferrer");
	}

    let darkMode = $state(false);

    function toggleDarkMode() {
        darkMode = !darkMode;
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    $effect(() => {
        if (typeof window !== "undefined") {
            if (darkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    });

    // Work experience data
	let workExperience = [
		{
			role: "Software Architect",
			company: "Bitmodern",
			year: "2023-2024 (1 year)",
			details: ["Refactored front-end and back-end features.", "Implemented unit tests during the refactoring process.", "Redefined design patterns."],
		},
		{
			role: "Software Architect",
			company: "OVH Cloud",
			year: "2022 (1 year)",
			details: ["Developed internal tools as micro-services for 3,000 employees.", "Advocated software craftsmanship philosophy with tests and documentation.", "Led architectural decisions for micro-services.", "Integrated tools into a unified platform using backstage.io."],
		},
        {
			role: "Entrepreneurship & Short Missions",
			year: "2020-2021 (1.2 years)",
			details: ["Atecna: VueJS, NuxtJS, and payment integration.", "UpStreamPay: React/Redux and EventStorming.", "Deepn: CTO, EventStorming, NuxtJS & RxJS/Redux.", "MonDriveo: CTO, Magento, Laravel & React/Redux."],
		},
		{
			role: "Front-end Developer",
			company: "OCUS",
			year: "2019-2020 (1.2 years)",
			details: ["Migrated Laravel features to NuxtJS.", "Implemented reactive components for a platform with 200k+ monthly image uploads.", "Streamlined shared processes across three dashboards."],
		},
		{
			role: "Fullstack Developer",
			company: "Autovisual",
			year: "2019 (6 months)",
			details: ["Analyzed UE used car market with +100k classified ads daily.", "Refactored SQL queries and backend features in Express.js.", "Implemented front-end features for the B2B product.", "Developed a POC to migrate the B2C site to NuxtJS."],
		},

		{
			role: "Incubator/Dapp Developer",
			company: "Matrice",
			year: "2018 (6 months)",
			details: ["Worked on blockchain projects in collaboration with Paris Descartes Law School and Be-Ys."],
		},
		{
			role: "Internship",
			company: "Silicio",
			year: "2018 (6 months)",
			details: ["Developed an accounting tool with 20 early adopters.", "Gained experience in TDD/DDD and design patterns through mob programming."],
		},
	];


	let technologies = ["Node.js", "NestJS", "Laravel", "VueJS", "ReactJS", "Web3", "Jest", "TDD", "Linux", "Git"];


	let education = [
		{
			institution: "Polkadot Blockchain Academy (Singapore)",
			certification: "Graduate (5th Wave)",
			year: "2024",
		},
		{
			institution: "42 (Paris)",
			certification: "Certified in Digital and Technology Architecture",
			year: "2016-2019",
		},
	];

</script>

<div class="container mx-auto px-4 py-8">
	<header class="mb-8">
		<div class="flex h-48 items-center justify-between">

            <div class="flex items-center space-x-4">
                <Avatar class="w-48 h-48 mx-auto my-4 mr-12">
                    <AvatarImage src="/pp.jpg" alt="Clement Jumelin" />
                    <AvatarFallback>CJ</AvatarFallback>
                </Avatar>
                
                <Separator orientation="vertical" class="h-36" />
				<div class="px-12">
					<h1 class="text-3xl font-bold">Clement Jumelin</h1>
					<p class="text-xl text-muted-foreground">Full Stack Developer</p>
				</div>
			</div>

            
            
			<div class="flex space-x-2">
				<Button variant="outline" size="icon">
					<Github class="h-4 w-4"   onclick={()=> openLink("https://github.com/Cjumelin")}/>
				</Button>
				<Button variant="outline" size="icon">
					<Linkedin class="h-4 w-4" onclick={()=> openLink("https://www.linkedin.com/in/cl%C3%A9ment-jumelin/")}/>
				</Button>
				<Button disabled variant="outline" size="icon">
					<BookOpen class="h-4 w-4" />
				</Button>

                <Button variant="outline" size="icon" onclick={toggleDarkMode}>
                    {#if darkMode}
                        <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    {:else}
                        <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                        <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
                    {/if}
                    <span class="sr-only">Toggle theme</span>
                </Button>
			</div>
		</div>
	</header>

	<section class="gap-8 mb-12">
		<Card>
			<CardHeader>
				<CardTitle>Profile</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{description}</p>
			</CardContent>
		</Card>

	</section>

	<main class="grid grid-cols-1 md:grid-cols-3 gap-8">
		<section class="md:col-span-2">
			<h2 class="text-2xl font-semibold mb-4">Experience</h2>
                {#each workExperience as experience}
                    <Card class="mb-6">
                        <CardHeader>
                            <CardTitle>{experience.role}{experience.company ? ` - ${experience.company}` : ""}</CardTitle>
                            <CardDescription>{experience.year}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul class="list-disc list-inside">
                                {#each experience.details as detail}
                                    <li>{@html detail}</li>
                                {/each}
                            </ul>
                        </CardContent>
                    </Card>
                {/each}
		</section>

		<aside>

            <section class="mb-12">
                <h2 class="text-2xl font-semibold mb-4">Education</h2>
                <div class="space-y-2">
                    {#each education as edu}
                        <Card>
                            <CardHeader>
                                <CardTitle>{edu.institution}</CardTitle>
                                <CardDescription>{edu.year}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{edu.certification}</p>
                            </CardContent>
                        </Card>
                    {/each}
                </div>
            </section>
			<Card>
				<CardHeader>
					<CardTitle>Skills</CardTitle>
				</CardHeader>
				<CardContent>
					{#each skills as skill}
						<div class="mb-4">
							<div class="flex justify-between mb-1">
								<span class="text-sm font-medium">{skill.name}</span>
								<span class="text-sm font-medium">{skill.level}%</span>
							</div>
							<Progress value={skill.level} />
						</div>
					{/each}
				</CardContent>
			</Card>

			<Card class="mt-6">
				<CardHeader>
					<CardTitle>Technologies</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="flex flex-wrap gap-2">
						{#each technologies as tech}
							<Badge>{tech}</Badge>
						{/each}
					</div>
				</CardContent>
			</Card>

			<Card class="mt-6">
				<CardHeader>
					<CardTitle>Blog</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="mb-4">Check out my latest thoughts and experiences in software development.</p>
					<Button disabled variant="outline" class="w-full">
						<BookOpen class="mr-2 h-4 w-4" />
						Blog incoming
					</Button>
				</CardContent>
			</Card>
		</aside>
	</main>

	<footer class="mt-12 text-center text-sm text-muted-foreground">
		<p>Licensed under MIT License. 2024 Cjumelin.</p>
	</footer>
</div>
