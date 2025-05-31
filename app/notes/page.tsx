import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, BookOpen, Star, Users, Eye } from "lucide-react"
import { SlidingNavbar } from "@/components/sliding-navbar"

export default function NotesPage() {
  const notes = [
    {
      id: 1,
      code: "BEGC-101",
      title: "An Introduction to Literature",
      program: "BA",
      semester: "1st",
      price: 0,
      type: "free",
      rating: 4.7,
      views: 5200,
      pages: 45,
      description: "Complete study notes covering all units with examples and analysis",
    },
    {
      id: 2,
      code: "BCS-011",
      title: "Computer Basics and PC Software",
      program: "BCA",
      semester: "1st",
      price: 149,
      type: "premium",
      rating: 4.9,
      views: 3100,
      pages: 78,
      description: "Detailed notes with screenshots, practical examples, and step-by-step guides",
    },
    {
      id: 3,
      code: "BCOS-183",
      title: "Computer Application in Business",
      program: "B.Com",
      semester: "1st",
      price: 0,
      type: "free",
      rating: 4.6,
      views: 4800,
      pages: 52,
      description: "Business computer applications with real-world case studies",
    },
    {
      id: 4,
      code: "MCS-011",
      title: "Problem Solving and Programming",
      program: "MCA",
      semester: "1st",
      price: 249,
      type: "premium",
      rating: 4.8,
      views: 2900,
      pages: 95,
      description: "Programming concepts, algorithms, and C language with solved examples",
    },
    {
      id: 5,
      code: "BPSC-101",
      title: "Introduction to Political Theory",
      program: "BA",
      semester: "1st",
      price: 99,
      type: "premium",
      rating: 4.5,
      views: 1800,
      pages: 68,
      description: "Political theory concepts explained with contemporary examples",
    },
    {
      id: 6,
      code: "BEVAE-181",
      title: "Environmental Studies",
      program: "All Programs",
      semester: "Any",
      price: 0,
      type: "free",
      rating: 4.4,
      views: 7500,
      pages: 42,
      description: "Environmental awareness, conservation, and sustainable development",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <SlidingNavbar />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IGNOU Study Notes</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive study notes for all IGNOU courses. Simplified explanations, key points highlighted, and
            exam-focused content to help you excel.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <Input placeholder="Search by course code or title..." className="w-full" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="ba">Bachelor of Arts (BA)</SelectItem>
                <SelectItem value="bca">Bachelor of Computer Applications (BCA)</SelectItem>
                <SelectItem value="bcom">Bachelor of Commerce (B.Com)</SelectItem>
                <SelectItem value="mca">Master of Computer Applications (MCA)</SelectItem>
                <SelectItem value="mba">Master of Business Administration (MBA)</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-8">
            <Button variant="default">All Notes</Button>
            <Button variant="outline">Free Notes</Button>
            <Button variant="outline">Premium Notes</Button>
            <Button variant="outline">Most Viewed</Button>
          </div>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={note.type === "free" ? "secondary" : "default"}>
                      {note.type === "free" ? "FREE" : "PREMIUM"}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{note.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{note.code}</CardTitle>
                  <CardDescription className="font-medium text-gray-900">{note.title}</CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{note.program}</span>
                    <span>•</span>
                    <span>{note.semester} Semester</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{note.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{note.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{note.pages} pages</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {note.price === 0 ? (
                        <span className="text-lg font-bold text-green-600">FREE</span>
                      ) : (
                        <span className="text-lg font-bold text-blue-600">₹{note.price}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {note.type === "free" ? (
                      <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download Free
                      </Button>
                    ) : (
                      <>
                        <Button className="w-full">Purchase Notes</Button>
                        <Button variant="outline" className="w-full" size="sm">
                          Preview Sample
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Our Study Notes Are Different</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Comprehensive Coverage</CardTitle>
                <CardDescription>All units and topics covered with detailed explanations and examples</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Key Points Highlighted</CardTitle>
                <CardDescription>
                  Important concepts and exam-relevant points clearly highlighted for quick revision
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Student-Friendly Language</CardTitle>
                <CardDescription>Complex topics explained in simple, easy-to-understand language</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Download className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Multiple Formats</CardTitle>
                <CardDescription>
                  Available in PDF, Word, and mobile-friendly formats for convenient studying
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Effective Study Tips</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">📚 Active Reading</CardTitle>
                <CardDescription>
                  Don't just read passively. Take notes, highlight key points, and summarize each section in your own
                  words.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🕒 Time Management</CardTitle>
                <CardDescription>
                  Create a study schedule and stick to it. Allocate specific time slots for each subject and take
                  regular breaks.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🔄 Regular Revision</CardTitle>
                <CardDescription>
                  Review your notes regularly. Use spaced repetition technique to improve long-term retention of
                  information.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">📝 Practice Tests</CardTitle>
                <CardDescription>
                  Take practice tests and solve previous year papers to familiarize yourself with exam patterns and
                  question types.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Start Your Successful Study Journey Today</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have improved their grades with our comprehensive study notes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Access Free Notes
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600"
            >
              View All Subjects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
