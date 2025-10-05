import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { Sparkles, Heart, MessageCircle, Share2, Award, TrendingUp, Users2, Send, Image as ImageIcon, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const CampusConnect = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [messageText, setMessageText] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

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

  const connections = [
    { id: 1, name: "Alex Kumar", role: "Computer Science - Year 3", mutual: 12, connected: true },
    { id: 2, name: "Emily Davis", role: "Electronics - Year 2", mutual: 8, connected: false },
    { id: 3, name: "James Wilson", role: "Mechanical - Year 4", mutual: 15, connected: true },
    { id: 4, name: "Lisa Chen", role: "Computer Science - Year 3", mutual: 6, connected: false },
    { id: 5, name: "Tom Brown", role: "Civil - Year 2", mutual: 10, connected: true },
    { id: 6, name: "Nina Patel", role: "Computer Science - Year 4", mutual: 9, connected: false }
  ];

  const chats = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Thanks for connecting!",
      time: "10m ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Alex Kumar",
      lastMessage: "See you at the workshop",
      time: "1h ago",
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: "Emily Davis",
      lastMessage: "Could you share those notes?",
      time: "2h ago",
      unread: 1,
      online: false
    }
  ];

  const messages = [
    { id: 1, sender: "them", text: "Hey! Thanks for connecting", time: "10:30 AM" },
    { id: 2, sender: "me", text: "No problem! Looking forward to collaborating", time: "10:32 AM" },
    { id: 3, sender: "them", text: "Are you attending the tech fest?", time: "10:35 AM" },
    { id: 4, sender: "me", text: "Yes! I'm helping organize the robotics workshop", time: "10:36 AM" }
  ];

  const trending = [
    { tag: "TechFest2024", posts: 234 },
    { tag: "ResearchWeek", posts: 156 },
    { tag: "CampusLife", posts: 428 },
    { tag: "CareerTalks", posts: 89 }
  ];

  const myProfile = {
    connections: 124,
    followers: 89,
    posts: 37,
    endorsements: 15
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // Backend-ready: Send message via API
    // await fetch('/api/messages', { method: 'POST', body: { chatId: selectedChat, message: messageText } });
    setMessageText("");
  };

  const handleConnect = (userId: number) => {
    // Backend-ready: Connect with user via API
    // await fetch('/api/connections', { method: 'POST', body: { userId } });
  };

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
            Your campus social network - connect, share, and grow together.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="feed">Feed</TabsTrigger>
                <TabsTrigger value="profile">My Profile</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6 mt-6">
                {/* Create Post */}
                <Card className="card-professional p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-brand-royal text-white">ME</AvatarFallback>
                    </Avatar>
                    <Input 
                      placeholder="Share your thoughts, achievements, or opportunities..."
                      className="flex-1"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ImageIcon className="h-4 w-4" />
                      Photo
                    </Button>
                    <Button variant="premium" size="sm">Post</Button>
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

              <TabsContent value="profile" className="space-y-6 mt-6">
                {/* Profile Header */}
                <Card className="card-professional p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="bg-brand-royal text-white text-2xl">ME</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-1">Your Name</h2>
                      <p className="text-muted-foreground mb-3">Computer Science - Final Year</p>
                      <Button variant="outline" size="sm">Edit Profile</Button>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 py-4 border-t">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-brand-emerald">{myProfile.posts}</p>
                      <p className="text-sm text-muted-foreground">Posts</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-brand-royal">{myProfile.connections}</p>
                      <p className="text-sm text-muted-foreground">Connections</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-brand-gold">{myProfile.followers}</p>
                      <p className="text-sm text-muted-foreground">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-brand-terracotta">{myProfile.endorsements}</p>
                      <p className="text-sm text-muted-foreground">Endorsements</p>
                    </div>
                  </div>
                </Card>

                {/* My Posts */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">My Posts</h3>
                  <div className="space-y-4">
                    {posts.slice(0, 2).map((post) => (
                      <article key={post.id} className="card-interactive p-6">
                        <p className="text-base mb-3">{post.content}</p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4" /> {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" /> {post.comments}
                          </span>
                          <span>{post.timestamp}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="network" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {connections.map((connection) => (
                    <Card key={connection.id} className="card-interactive p-5">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-14 w-14">
                          <AvatarFallback className="bg-brand-royal text-white">
                            {connection.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{connection.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {connection.role}
                          </p>
                          <p className="text-xs text-muted-foreground mb-3">
                            {connection.mutual} mutual connections
                          </p>
                          <div className="flex gap-2">
                            {connection.connected ? (
                              <>
                                <Button size="sm" variant="outline">Message</Button>
                                <Button size="sm" variant="ghost">Following</Button>
                              </>
                            ) : (
                              <>
                                <Button 
                                  size="sm" 
                                  variant="premium"
                                  onClick={() => handleConnect(connection.id)}
                                  className="gap-1"
                                >
                                  <UserPlus className="h-3 w-3" />
                                  Connect
                                </Button>
                                <Button size="sm" variant="outline">View Profile</Button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="mt-6">
                <div className="grid md:grid-cols-3 gap-4 h-[600px]">
                  {/* Chat List */}
                  <Card className="card-professional p-4 md:col-span-1">
                    <h3 className="font-semibold mb-4">Messages</h3>
                    <ScrollArea className="h-[520px]">
                      <div className="space-y-2">
                        {chats.map((chat) => (
                          <button
                            key={chat.id}
                            onClick={() => setSelectedChat(chat.id)}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              selectedChat === chat.id 
                                ? 'bg-accent' 
                                : 'hover:bg-accent/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <Avatar className="h-10 w-10">
                                  <AvatarFallback className="bg-brand-emerald text-white text-sm">
                                    {chat.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                {chat.online && (
                                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-background rounded-full" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="font-medium text-sm truncate">{chat.name}</p>
                                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                                  {chat.unread > 0 && (
                                    <Badge className="h-5 w-5 flex items-center justify-center p-0 bg-brand-emerald text-xs">
                                      {chat.unread}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </ScrollArea>
                  </Card>

                  {/* Chat Window */}
                  <Card className="card-professional md:col-span-2">
                    {selectedChat ? (
                      <div className="flex flex-col h-full">
                        {/* Chat Header */}
                        <div className="p-4 border-b flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-brand-emerald text-white">
                              {chats.find(c => c.id === selectedChat)?.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{chats.find(c => c.id === selectedChat)?.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {chats.find(c => c.id === selectedChat)?.online ? 'Online' : 'Offline'}
                            </p>
                          </div>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="flex-1 p-4">
                          <div className="space-y-4">
                            {messages.map((message) => (
                              <div
                                key={message.id}
                                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                              >
                                <div
                                  className={`max-w-[70%] rounded-lg p-3 ${
                                    message.sender === 'me'
                                      ? 'bg-brand-emerald text-white'
                                      : 'bg-accent'
                                  }`}
                                >
                                  <p className="text-sm">{message.text}</p>
                                  <p className={`text-xs mt-1 ${
                                    message.sender === 'me' ? 'text-white/70' : 'text-muted-foreground'
                                  }`}>
                                    {message.time}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>

                        {/* Input */}
                        <div className="p-4 border-t">
                          <div className="flex gap-2">
                            <Input
                              placeholder="Type a message..."
                              value={messageText}
                              onChange={(e) => setMessageText(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <Button onClick={handleSendMessage} size="icon" variant="premium">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <div className="text-center">
                          <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p>Select a chat to start messaging</p>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
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
                  <span className="font-bold text-lg">{myProfile.connections}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-brand-gold" />
                    <span className="text-sm text-muted-foreground">Endorsements</span>
                  </div>
                  <span className="font-bold text-lg">{myProfile.endorsements}</span>
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
