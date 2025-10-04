import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { Sparkles, Heart, MessageCircle, Share2, Briefcase, Award, TrendingUp, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const CampusConnect = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        role: "Computer Science - Final Year",
        avatar: "",
        verified: true
      },
      content: "Just completed my internship at TechCorp! Looking forward to sharing insights at tomorrow's career session. #InternshipExperience #CareerGrowth",
      image: "",
      likes: 42,
      comments: 8,
      shares: 3,
      timestamp: "2 hours ago",
      tags: ["Career", "Internship"]
    },
    {
      id: 2,
      author: {
        name: "Dr. Michael Chen",
        role: "Assistant Professor - AI Lab",
        avatar: "",
        verified: true
      },
      content: "Excited to announce our new research project on sustainable AI! Looking for passionate students to join our team. DM for details.",
      likes: 67,
      comments: 15,
      shares: 12,
      timestamp: "5 hours ago",
      tags: ["Research", "AI", "Opportunity"]
    },
    {
      id: 3,
      author: {
        name: "Campus Robotics Club",
        role: "Student Organization",
        avatar: "",
        verified: true
      },
      content: "🤖 Workshop Alert! Introduction to ROS2 this Saturday. Registration open! Limited seats available.",
      likes: 89,
      comments: 22,
      shares: 18,
      timestamp: "1 day ago",
      tags: ["Workshop", "Robotics", "Event"]
    }
  ];

  const opportunities = [
    {
      title: "Research Assistant - Machine Learning",
      department: "Computer Science",
      type: "Research",
      deadline: "Nov 15, 2024"
    },
    {
      title: "Teaching Assistant - Data Structures",
      department: "Computer Science",
      type: "Teaching",
      deadline: "Nov 10, 2024"
    },
    {
      title: "Summer Internship - AI Startup",
      department: "Career Services",
      type: "Internship",
      deadline: "Dec 1, 2024"
    }
  ];

  const trending = [
    { tag: "TechFest2024", posts: 234 },
    { tag: "ResearchWeek", posts: 156 },
    { tag: "CampusLife", posts: 428 },
    { tag: "CareerTalks", posts: 89 }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Campus Connect - Permission Portal+",
    description: "Professional networking and social feed for campus community - connect, collaborate, and grow.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <main className="container mx-auto flex-1 px-4 pb-24 pt-8">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-7 w-7 text-brand-emerald" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Campus Connect
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Your professional network on campus - connect with peers, mentors, and opportunities.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6 mt-6">
                {/* Create Post */}
                <Card className="card-professional p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-brand-royal text-white">ME</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="flex-1 justify-start text-muted-foreground">
                      Share your thoughts, achievements, or opportunities...
                    </Button>
                  </div>
                </Card>

                {/* Posts Feed */}
                {posts.map((post) => (
                  <article key={post.id} className="card-professional p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-brand-emerald text-white">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{post.author.name}</h3>
                          {post.author.verified && (
                            <Badge variant="secondary" className="bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{post.author.role}</p>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                      </div>
                    </div>

                    <p className="text-base mb-3">{post.content}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </Button>
                    </div>
                  </article>
                ))}
              </TabsContent>

              <TabsContent value="network" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="card-interactive p-5">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarFallback className="bg-brand-royal text-white">
                            U{i}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">User Name {i}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Computer Science - Year {i % 4 + 1}
                          </p>
                          <div className="flex gap-2">
                            <Button size="sm" variant="default">Connect</Button>
                            <Button size="sm" variant="outline">View Profile</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="opportunities" className="space-y-4 mt-6">
                {opportunities.map((opp, index) => (
                  <Card key={index} className="card-interactive p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-brand-emerald/10 p-3">
                          <Briefcase className="h-6 w-6 text-brand-emerald" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{opp.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{opp.department}</p>
                          <div className="flex gap-2">
                            <Badge variant="outline">{opp.type}</Badge>
                            <Badge variant="secondary">Due: {opp.deadline}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="default">Apply</Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Profile Summary */}
            <Card className="card-professional p-5">
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-brand-royal text-white text-lg">ME</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Your Profile</h3>
                  <p className="text-sm text-muted-foreground">Complete your profile</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Profile Strength</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-brand-emerald rounded-full" />
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Edit Profile
              </Button>
            </Card>

            {/* Trending Topics */}
            <Card className="card-professional p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-brand-terracotta" />
                <h2 className="font-semibold">Trending</h2>
              </div>
              <div className="space-y-3">
                {trending.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left hover:bg-accent/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">#{item.tag}</span>
                      <span className="text-xs text-muted-foreground">{item.posts} posts</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="card-professional p-5">
              <h2 className="font-semibold mb-4">Your Impact</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users2 className="h-4 w-4 text-brand-emerald" />
                    <span className="text-sm text-muted-foreground">Connections</span>
                  </div>
                  <span className="font-bold text-lg">124</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-brand-gold" />
                    <span className="text-sm text-muted-foreground">Endorsements</span>
                  </div>
                  <span className="font-bold text-lg">37</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-brand-terracotta" />
                    <span className="text-sm text-muted-foreground">Profile Views</span>
                  </div>
                  <span className="font-bold text-lg">89</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>

      <BottomNav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default CampusConnect;
